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
import CreateProduct from '~/pages/Shop/Product/create';
import EditProduct from '~/pages/Shop/Product/edit';
import Floors from '~/pages/Shop/Floors/index';
import Shops from '~/pages/Shop/Shop/index';
import CreateShops from '~/pages/Shop/Shop/create';
import EditShops from '~/pages/Shop/Shop/edit';

//      Booking
import Booking from '~/pages/Magager/Booking/index';

//      Movie
import Movies from '~/pages/Movies/Movie/movie';
import CreateMovies from '~/pages/Movies/Movie/create';
import EditMovies from '~/pages/Movies/Movie/edit';

import Shows from '~/pages/Movies/Shows/index';
import CreateShows from '~/pages/Movies/Shows/create';
import EditShows from '~/pages/Movies/Shows/edit';

import Genres from '~/pages/Movies/Genres/index';
import Rooms from '~/pages/Movies/room';


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
    { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.editProduct, component: EditProduct, layout: AdminLayout },
    { path: config.routes.floors, component: Floors, layout: AdminLayout },
    { path: config.routes.shops, component: Shops, layout: AdminLayout },
    { path: config.routes.createShops, component: CreateShops, layout: AdminLayout },
    { path: config.routes.editShops, component: EditShops, layout: AdminLayout },

    //      Booking
    { path: config.routes.booking, component: Booking, layout: AdminLayout },
    { path: config.routes.users, component: User, layout: AdminLayout },

    //      Movie
    { path: config.routes.movies, component: Movies, layout: AdminLayout },
    { path: config.routes.createMovies, component: CreateMovies, layout: AdminLayout },
    { path: config.routes.editMovies, component: EditMovies, layout: AdminLayout },

    { path: config.routes.genres, component: Genres, layout: AdminLayout },
    { path: config.routes.shows, component: Shows, layout: AdminLayout },
    { path: config.routes.createShows, component: CreateShows, layout: AdminLayout },
    { path: config.routes.editShows, component: EditShows, layout: AdminLayout },

    { path: config.routes.rooms, component: Rooms, layout: AdminLayout },

];

// Private routes
export const privateRoutes = [];