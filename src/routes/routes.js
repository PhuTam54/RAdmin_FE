import config from '~/config';

// Layouts
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import HomeAdmin from '~/pages/Home';
import Chart from '~/pages/Home/chart';

import Profile from '~/pages/Profile';
import Error_404 from '~/pages/Error';

//      Account
import Login from '~/pages/Account/login';
import Register from '~/pages/Account/register';
import ForgotPassword from '~/pages/Account/forgotpassword';
import ResetPassword from '~/pages/Account/resetpassword';

import Invoice from '~/pages/Invoice';

import Product from '~/pages/Product/index';
import CreateProduct from '~/pages/Product/create';
//      Booking
import Booking from '~/pages/Booking/index';
import CreateBooking from '~/pages/Booking/create';

//      Movie
import Movie from '~/pages/Movie/index';
import CreateMovie from '~/pages/Movie/create';

//      FeedBack
import Feedback from '~/pages/FeedBack/index';
import CreateFeedback from '~/pages/FeedBack/create';

//      FeedBack
import Users from '~/pages/Users/index';
import CreateUsers from '~/pages/Users/create';

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

       //      Users
       { path: config.routes.users, component: Users, layout: AdminLayout },
       { path: config.routes.createUsers, component: CreateUsers, layout: AdminLayout },
];

// Private routes
export const privateRoutes = [];