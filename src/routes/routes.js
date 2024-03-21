import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import HomeAdmin from '~/pages/Admin/Home';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.admin, component: HomeAdmin, layout: AdminLayout },

];

// Private routes
export const privateRoutes = [];
