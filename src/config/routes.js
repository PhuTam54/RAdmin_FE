const routes = {

    admin: '/',
    chart: '/chart',

    profile: '/profile',
    error_404: '/error_404',
    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    invoice: '/invoice',

    //      Shop
    category: '/category',
    product: '/product',
    createProduct: '/create/product',
    editProduct: '/edit/product/:id',
    floors: '/floors',
    shops: '/shops',
    createShops: '/createShops',
    editShops: `/shops/edit/:id`,

    //      Booking
    booking: '/booking',
    createBooking: '/booking/create',

    //      Booking
    movies: '/movies',
    // createMovie: '/movie/create',

    //      Booking
    feedback: '/feedback',
    createFeedback: '/feedback/create',

    //      Users
    users: '/users',
    createUsers: '/users/create',

};

export default routes;
