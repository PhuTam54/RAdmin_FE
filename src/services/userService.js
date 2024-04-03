import axios from 'axios';
import * as httpRequest from '~/utils/httpRequest';

const getSuggested = async ({ page = 1, perPage = 5 }) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const loginApi = (email, password) => {
    return axios.post('https://localhost:7168/api/v1/LoginRegister/Login', { email, password });
};
export { getSuggested, loginApi };
