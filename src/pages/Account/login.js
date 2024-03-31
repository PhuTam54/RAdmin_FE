import images from '~/assets/img/';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        if (!email || !password) {
            toast.error('Email/Password is required!');
            return;
        }

        try {
            const response = await axios.post('https://localhost:7168/api/v1/LoginRegister/Login', {
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
                                    {' '}
                                    {/* Thêm onSubmit để xử lý sự kiện submit của form */}
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            tabIndex={1}
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        <div className="invalid-feedback">Please fill in your email</div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-block">
                                            <label htmlFor="password" className="control-label">
                                                Password
                                            </label>
                                            <div className="float-right">
                                                <a href="/forgotpassword" className="text-small">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            tabIndex={2}
                                            required=""
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <div className="invalid-feedback">please fill in your password</div>
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
                                            className={
                                                email && password
                                                    ? 'active btn btn-primary btn-lg btn-block'
                                                    : 'btn btn-primary btn-lg btn-block'
                                            }
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
                                    Don't have an account? <a href="/register">Create One</a>
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
