import logo from '~/assets/images/mall.webp';
function SidebarAdmin() {
    return (
        <>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <image src={logo} width={0} height={18}></image>
                        <a href="/"> RAdmin - Mall </a>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">St</a>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-header">Dashboard</li>
                        <li className="dropdown active">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-fire"></i>
                                <span>Dashboard</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="active">
                                    <a className="nav-link" href="/">
                                        Ecommerce Dashboard
                                    </a>
                                </li>
                                <li class="active">
                                    <a class="nav-link" href="/chart">
                                        Chart Dashboard
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-header">Pages</li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-bicycle"></i> <span>Manager</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/product">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/movie">
                                        Movie
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/booking">
                                        Booking
                                    </a>
                                </li>

                                <li>
                                    <a className="nav-link" href="/profile">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Feedback
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/users">
                                        Users
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="far fa-user"></i> <span>Auth</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="admin/forgotpassword">Forgot Password</a>
                                </li>
                                <li>
                                    <a href="/login">Login</a>
                                </li>
                                <li>
                                    <a href="/register">Register</a>
                                </li>
                                <li>
                                    <a href="/resetpassword">Reset Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-exclamation"></i> <span>Errors</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/error_404">
                                        503
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="admin/error_404">
                                        403
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/error_404">
                                        404
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="admin/error_404">
                                        500
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-ellipsis-h"></i> <span>Utilities</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/invoice">
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    );
}

export default SidebarAdmin;
