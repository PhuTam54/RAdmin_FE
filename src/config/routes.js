const routes = {

    admin: '/',
    chart: '/chart',

    profile: '/profile/:id',
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
    createProduct: '/product/create',
    editProduct: '/product/edit/:id',
    floors: '/floors',
    shops: '/shops',
    createShops: '/shops/create',
    editShops: `shops/edit/:id`,

    //      Booking
    booking: '/booking',
    createBooking: '/booking/create',

    //      Movie
    movies: '/movies',
    createMovies: '/movies/create',
    editMovies: '/movies/edit/:id',

    genres: '/genres',
    shows: '/shows',
    createShows: 'shows/create', 
    editShows: 'shows/edit/:id',
    rooms: '/rooms',

    //      Booking
    feedback: '/feedback',
    createFeedback: '/feedback/create',

    //      Users
    users: '/users',
    createUsers: '/users/create',

};

export default routes;
