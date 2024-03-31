import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const login = (username, password) => {
    axios.post('/api/login', { username, password })
        .then((response) => {
            const { accessToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            getData();
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
};

// Hàm đăng xuất
const logout = () => {
    // Xóa token khỏi local storage khi đăng xuất
    localStorage.removeItem('accessToken');
};

// Hàm lấy dữ liệu từ API
const getData = () => {
    axiosInstance
        .get(`https://localhost:7168/api/v1/Shops`)
        .then((response) => {
            setData(response.data);
            setSearchedData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
};
