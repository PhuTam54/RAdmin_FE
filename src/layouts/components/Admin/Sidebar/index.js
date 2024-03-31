import images from '~/assets/images/';
function SidebarAdmin() {
    return (
        <>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <image src={images.logo} width={0} height={18}></image>
                        <a href="/"> RAdmin - Mall </a>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">St</a>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-header">Dashboard</li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-fire"></i> <span>Dashboard</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="active">
                                    <a className="nav-link" href="/">
                                        Ecommerce Dashboard
                                    </a>
                                </li>
                                <li class="active">
                                    <a className="nav-link" href="/chart">
                                        Chart Dashboard
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-header">Pages</li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-video"></i> <span>Movie</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/product">
                                        Favorite
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/product">
                                        Movie
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/product">
                                        Room
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/floors">
                                        Show
                                    </a>
                                </li>

                                <li>
                                    <a className="nav-link" href="/shop">
                                        Ticket
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-cart-plus"></i> <span>Order</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/food">
                                        Food
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/order">
                                        Order
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/orderFood">
                                        OrderFood
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fab fa-shopify"></i> <span>Shop</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/category">
                                        Category
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/product">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/floors">
                                        Floors
                                    </a>
                                </li>

                                <li>
                                    <a className="nav-link" href="/shop">
                                        Shop
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-tasks"></i> <span>Manager</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/movie">
                                        Card
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/booking">
                                        Booking
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/booking">
                                        ContactInfo
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Feedback
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        LoginModel
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Map
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Payments
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/invoice">
                                        Invoice
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
                                    <a href="/forgotpassword">Forgot Password</a>
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
                    </ul>
                </aside>
            </div>
        </>
    );
}

export default SidebarAdmin;
