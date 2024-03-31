import config from '~/config';

// Layouts
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import HomeAdmin from '~/pages/Home';
import Chart from '~/pages/Home/chart';

import Error_404 from '~/pages/Error';

//      Account
import Login from '~/pages/Account/login';
import Register from '~/pages/Account/register';
import ForgotPassword from '~/pages/Account/forgotpassword';
import ResetPassword from '~/pages/Account/resetpassword';

import Profile from '~/pages/Magager/Profile';
import Invoice from '~/pages/Magager/Invoice';
// Shop
import Category from '~/pages/Shop/Category/index';
import Product from '~/pages/Shop/Product/index';
import Floors from '~/pages/Shop/Floors/index';

//      Booking
import Booking from '~/pages/Magager/Booking/index';

// //      Movie
// import Movie from '~/pages/Movie/index';
// import CreateMovie from '~/pages/Movie/create';

// //      FeedBack
// import Feedback from '~/pages/FeedBack/index';
// import CreateFeedback from '~/pages/FeedBack/create';

// //      FeedBack
// import Users from '~/pages/Users/index';
// import CreateUsers from '~/pages/Users/create';
import User from '~/pages/Magager/Users/index';

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

    //      Error
    { path: config.routes.error_404, component: Error_404, layout: null },

    { path: config.routes.profile, component: Profile, layout: AdminLayout },
    { path: config.routes.invoice, component: Invoice, layout: AdminLayout },

    // Shop
    { path: config.routes.category, component: Category, layout: AdminLayout },
    { path: config.routes.product, component: Product, layout: AdminLayout },
    { path: config.routes.floors, component: Floors, layout: AdminLayout },

    // { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },

    //      Booking
    { path: config.routes.booking, component: Booking, layout: AdminLayout },
    // { path: config.routes.createBooking, component: CreateBooking, layout: AdminLayout },
    { path: config.routes.users, component: User, layout: AdminLayout },

    // //      Movie
    // { path: config.routes.movie, component: Movie, layout: AdminLayout },
    // { path: config.routes.createMovie, component: CreateMovie, layout: AdminLayout },

    // //      FeedBack
    // { path: config.routes.feedback, component: Feedback, layout: AdminLayout },
    // { path: config.routes.createFeedback, component: CreateFeedback, layout: AdminLayout },

    //    //      Users
    //    { path: config.routes.users, component: Users, layout: AdminLayout },
    //    { path: config.routes.createUsers, component: CreateUsers, layout: AdminLayout },
];

// Private routes
export const privateRoutes = [];
