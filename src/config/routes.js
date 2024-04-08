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
    createShops: '/create/shops',
    editShops: `edit/shops/:id`,

    //      Booking
    booking: '/booking',
    createBooking: '/booking/create',

    //      Movie
    movies: '/movies',
    createMovies: '/create/movies',
    editMovies: '/edit/movies/:id',

    genres: '/genres',
    shows: '/shows',
    rooms: '/rooms',

    //      Booking
    feedback: '/feedback',
    createFeedback: '/feedback/create',

    //      Users
    users: '/users',
    createUsers: '/users/create',

};

export default routes;
