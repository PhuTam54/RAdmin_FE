function SidebarAdmin() {
    return ( <>
    <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">Stislaaaa</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="dropdown active">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li className="active"><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-th"></i> <span>Bootstrap</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="bootstrap-form.html">Form</a></li>
                <li><a className="nav-link" href="bootstrap-modal.html">Modal</a></li>
              </ul>
            </li>
            <li className="menu-header">Stisla</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-th-large"></i> <span>Components</span></a>
              <ul className="dropdown-menu">             
                <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">Avatar</a></li>
                <li><a className="nav-link beep beep-sidebar" href="components-empty-state.html">Empty State</a></li>            
                <li><a className="nav-link" href="components-gallery.html">Gallery</a></li>
                <li><a className="nav-link beep beep-sidebar" href="components-hero.html">Hero</a></li>
                <li><a className="nav-link" href="components-statistic.html">Statistic</a></li>                
                <li><a className="nav-link" href="components-tab.html">Tab</a></li>
                <li><a className="nav-link" href="components-table.html">Table</a></li>
                <li><a className="nav-link" href="components-user.html">User</a></li>                
                <li><a className="nav-link beep beep-sidebar" href="components-wizard.html">Wizard</a></li>              
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="far fa-file-alt"></i> <span>Forms</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
                <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-plug"></i> <span>Modules</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="modules-calendar.html">Calendar</a></li>
                <li><a className="nav-link" href="modules-chartjs.html">ChartJS</a></li>
                <li><a className="nav-link" href="modules-datatables.html">DataTables</a></li>
                <li><a className="nav-link" href="modules-ion-icons.html">Ion Icons</a></li>
                <li><a className="nav-link" href="modules-owl-carousel.html">Owl Carousel</a></li>
                <li><a className="nav-link" href="modules-sweet-alert.html">Sweet Alert</a></li>
                <li><a className="nav-link" href="modules-toastr.html">Toastr</a></li>
                <li><a className="nav-link" href="modules-vector-map.html">Vector Map</a></li>
                <li><a className="nav-link" href="modules-weather-icon.html">Weather Icon</a></li>
              </ul>
            </li>
            <li className="menu-header">Pages</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="far fa-user"></i> <span>Auth</span></a>
              <ul className="dropdown-menu">
                <li><a href="auth-forgot-password.html">Forgot Password</a></li> 
                <li><a href="auth-login.html">Login</a></li> 
                <li><a href="auth-register.html">Register</a></li> 
                <li><a href="auth-reset-password.html">Reset Password</a></li> 
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-exclamation"></i> <span>Errors</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="errors-503.html">503</a></li> 
                <li><a className="nav-link" href="errors-403.html">403</a></li> 
                <li><a className="nav-link" href="errors-404.html">404</a></li> 
                <li><a className="nav-link" href="errors-500.html">500</a></li> 
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle"></i> <span>Features</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="features-activities.html">Activities</a></li>
                <li><a className="nav-link" href="features-post-create.html">Post Create</a></li>
                <li><a className="nav-link" href="features-posts.html">Posts</a></li>
                <li><a className="nav-link" href="features-profile.html">Profile</a></li>
                <li><a className="nav-link" href="features-settings.html">Settings</a></li>
                <li><a className="nav-link" href="features-setting-detail.html">Setting Detail</a></li>
                <li><a className="nav-link" href="features-tickets.html">Tickets</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-ellipsis-h"></i> <span>Utilities</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="utilities-invoice.html">Invoice</a></li>
              </ul>
            </li>            
          </ul>

        </aside>
      </div>
    </> );
}

export default SidebarAdmin;