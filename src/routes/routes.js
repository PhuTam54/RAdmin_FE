import config from '~/config';

// Layouts
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import HomeAdmin from '~/pages/Admin/Home';
import Chart from '~/pages/Admin/Home/chart';

import Profile from '~/pages/Admin/Profile';
import Error_404 from '~/pages/Admin/Error';

//      Account
import Login from '~/pages/Admin/Account/login';
import Register from '~/pages/Admin/Account/register';
import ForgotPassword from '~/pages/Admin/Account/forgotpassword';
import ResetPassword from '~/pages/Admin/Account/resetpassword';

import Invoice from '~/pages/Admin/Invoice';

import Product from '~/pages/Admin/Product/index';
import CreateProduct from '~/pages/Admin/Product/create';
//      Booking
import Booking from '~/pages/Admin/Booking/index';
import CreateBooking from '~/pages/Admin/Booking/create';

//      Movie
import Movie from '~/pages/Admin/Movie/index';
import CreateMovie from '~/pages/Admin/Movie/create';

//      FeedBack
import Feedback from '~/pages/Admin/FeedBack/index';
import CreateFeedback from '~/pages/Admin/FeedBack/create';

// Public routes
export const publicRoutes = [
    //      Home
    { path: config.routes.admin, component: HomeAdmin, layout: AdminLayout },
    { path: config.routes.chart, component: Chart, layout: AdminLayout },

    //      Account
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.forgotpassword, component: ForgotPassword, layout: null },
    { path: config.routes.resetpassword, component: ResetPassword, layout: null },

    { path: config.routes.profile, component: Profile, layout: AdminLayout },
    //      Error
    { path: config.routes.error_404, component: Error_404, layout: null },

    { path: config.routes.invoice, component: Invoice, layout: AdminLayout },
    //      Product
    { path: config.routes.product, component: Product, layout: AdminLayout },
    { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },

    //      Booking
    { path: config.routes.booking, component: Booking, layout: AdminLayout },
    { path: config.routes.createBooking, component: CreateBooking, layout: AdminLayout },

    //      Movie
    { path: config.routes.movie, component: Movie, layout: AdminLayout },
    { path: config.routes.createMovie, component: CreateMovie, layout: AdminLayout },

    //      FeedBack
    { path: config.routes.feedback, component: Feedback, layout: AdminLayout },
    { path: config.routes.createFeedback, component: CreateFeedback, layout: AdminLayout },
];

// Private routes
export const privateRoutes = [];
