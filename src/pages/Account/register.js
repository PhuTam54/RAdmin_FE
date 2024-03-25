import p50 from '~/assets/img/p-50.png';
import logo from '~/assets/img/stisla-fill.svg';

function Register() {
    return (
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div className="login-brand">
                            <img
                                src={logo}
                                alt="logo"
                                width={100}
                                className="shadow-light rounded-circle"
                            />
                        </div>
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form method="POST">
                                    <div className="form-group">
                                        <label htmlFor="user">User</label>
                                        <input
                                            id="user"
                                            type="user"
                                            className="form-control"
                                            name="user"
                                            placeholder="User"
                                        />
                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="password" className="d-block">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control pwstrength"
                                                data-indicator="pwindicator"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <div id="pwindicator" className="pwindicator">
                                                <div className="bar" />
                                                <div className="label" />
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="password2" className="d-block">
                                                Password Confirmation
                                            </label>
                                            <input
                                                id="password2"
                                                type="password"
                                                className="form-control"
                                                name="password-confirm"
                                                placeholder="Password Confirmation"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                className="custom-control-input"
                                                id="agree"
                                            />
                                            <label className="custom-control-label" htmlFor="agree">
                                                I agree with the terms and conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-5 text-muted text-center">
                                    You have an account? <a href="/login">Login</a>
                                </div>
                            </div>
                        </div>
                        <div className="simple-footer">Copyright © Stisla 2018</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
