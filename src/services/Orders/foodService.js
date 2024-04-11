import { get, post, put, del } from '~/utils/httpRequest';

export const getFoods = async () => {
    try {
        const response = await get('/v1/Foods/');
        return response;
    } catch (error) {
        console.error('Error fetching Foods data:', error);
        throw error;
    }
};

export const createFoods = async (name, qty, price, description) => {
    try {
        const newData = { name, qty, price, description };
        await post(`/v1/Foods`, newData);
    } catch (error) {
        console.error('Failed to create Foods', error);
        throw error;
    }
};

export const editFoods = async (id) => {
    try {
        const response = await get(`/v1/Foods/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Foods data:', error);
        throw error;
    }
};

export const updateFoods = async (id, name, qty, price, description) => {
    try {
        const updatedData = { id, name, qty, price, description };
        await put(`/v1/Foods/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Foods', error);
        throw error;
    }
};

export const deleteFoods = async (id) => {
    try {
        await del(`/v1/Foods/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Foods', error);
        throw error;
    }
};
