import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '~/assets/img/';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            toast.error('Email/Password is required!');
            return;
        }

        try {
            const response = await axiosInstance.post('https://localhost:7168/api/v1/LoginRegister/Login', {
                email: email,
                password: password,
            });

            if (response && response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
                toast.success('Login successful!');
            } else {
                toast.error('Invalid response from server');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.error);
            } else {
                toast.error('An error occurred while logging in. Please try again later.');
            }
        }
    };

    return (
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="login-brand">
                            <img src={images.logo} alt="logo" width={100} className="shadow-light rounded-circle" />
                        </div>
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            tabIndex={1}
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">Please fill in your email</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            tabIndex={2}
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">please fill in your password</div>
                                        <div className="float-right">
                                            <Link to="/forgotpassword" className="text-small">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                className="custom-control-input"
                                                tabIndex={3}
                                                id="remember-me"
                                            />
                                            <label className="custom-control-label" htmlFor="remember-me">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className={`btn btn-primary btn-lg btn-block ${
                                                email && password ? 'active' : ''
                                            }`}
                                            tabIndex={4}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4 mb-3">
                                    <div className="text-job text-muted">Login With Social</div>
                                </div>
                                <div className="mt-5 text-muted text-center">
                                    Don't have an account? <Link to="/register">Create One</Link>
                                </div>
                            </div>
                        </div>
                        <div className="simple-footer">Copyright © Stisla 2018</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Login;
