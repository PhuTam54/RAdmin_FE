import avatar from '~/assets/img/avatar/avatar-1.png';
import product from '~/assets/img/products/product-3-50.png';

function HeaderAdmin() {
    return (
        <>
            <div className="navbar-bg" />
            <nav className="navbar navbar-expand-lg main-navbar">
                <form className="form-inline mr-auto">
                    <ul className="navbar-nav mr-3">
                        <li>
                            <a href="#" data-toggle="sidebar" className="nav-link nav-link-lg">
                                <i className="fas fa-bars" />
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none">
                                <i className="fas fa-search" />
                            </a>
                        </li>
                    </ul>
                    <div className="search-element">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            data-width={250}
                        />
                        <button className="btn" type="submit">
                            <i className="fas fa-search" />
                        </button>
                        <div className="search-backdrop" />
                        <div className="search-result">
                            <div className="search-header">Histories</div>
                            <div className="search-item">
                                <a href="#">How to hack NASA using CSS</a>
                                <a href="#" className="search-close">
                                    <i className="fas fa-times" />
                                </a>
                            </div>
                            <div className="search-header">Result</div>
                            <div className="search-item">
                                <a href="#">
                                    <img className="mr-3 rounded" width={30} src={product} alt="product" />
                                    Headphone Blitz
                                </a>
                            </div>
                            <div className="search-header">Projects</div>
                            <div className="search-item">
                                <a href="#">
                                    <div className="search-icon bg-primary text-white mr-3">
                                        <i className="fas fa-laptop" />
                                    </div>
                                    Create a new Homepage Design
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav navbar-right">
                    <li className="dropdown dropdown-list-toggle">
                        <a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep">
                            <i className="far fa-envelope" />
                        </a>
                        <div className="dropdown-menu dropdown-list dropdown-menu-right">
                            <div className="dropdown-header">
                                Messages
                                <div className="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-message">
                                <a href="#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-avatar">
                                        <img alt="image" src={avatar} className="rounded-circle" />
                                        <div className="is-online" />
                                    </div>
                                    <div className="dropdown-item-desc">
                                        <b>Kusnaedi</b>
                                        <p>Hello, Bro!</p>
                                        <div className="time">10 Hours Ago</div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="#">
                                    View All <i className="fas fa-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown dropdown-list-toggle">
                        <a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep">
                            <i className="far fa-bell" />
                        </a>
                        <div className="dropdown-menu dropdown-list dropdown-menu-right">
                            <div className="dropdown-header">
                                Notifications
                                <div className="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div className="dropdown-list-content dropdown-list-icons">
                                <a href="#" className="dropdown-item dropdown-item-unread">
                                    <div className="dropdown-item-icon bg-primary text-white">
                                        <i className="fas fa-code" />
                                    </div>
                                    <div className="dropdown-item-desc">
                                        Template update is available now!
                                        <div className="time text-primary">2 Min Ago</div>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="dropdown-item-icon bg-info text-white">
                                        <i className="fas fa-bell" />
                                    </div>
                                    <div className="dropdown-item-desc">
                                        Welcome to Stisla template!
                                        <div className="time">Yesterday</div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer text-center">
                                <a href="#">
                                    View All <i className="fas fa-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#"
                            data-toggle="dropdown"
                            className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                        >
                            <img alt="image" src={avatar} className="rounded-circle mr-1" />
                            <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-title">Logged in 5 min ago</div>
                            <a href="/profile" className="dropdown-item has-icon">
                                <i className="far fa-user" /> Profile
                            </a>
                            <a href="features-activities.html" className="dropdown-item has-icon">
                                <i className="fas fa-bolt" /> Activities
                            </a>
                            <a href="features-settings.html" className="dropdown-item has-icon">
                                <i className="fas fa-cog" /> Settings
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item has-icon text-danger">
                                <i className="fas fa-sign-out-alt" /> Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HeaderAdmin;
