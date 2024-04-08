import { get, post, put, del } from '~/utils/httpRequest';

export const getShows = async () => {
    try {
        const response = await get('/v1/Shows/');
        return response;
    } catch (error) {
        console.error('Error fetching Shows data:', error);
        throw error;
    }
};

export const createShows = async (name, show_Code, start_Date, movieId, roomId) => {
    try {
        const newData = { name, show_Code, start_Date, movieId, roomId};
        await post('/v1/Shows', newData);
    } catch (error) {
        console.error('Failed to create Shows', error);
        throw error;
    }
};

export const editShows = async (id) => {
    try {
        const response = await get(`/v1/Shows/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Shows data:', error);
        throw error;
    }
};

export const updateShows = async (id, name, show_Code, start_Date, movieId, roomId) => {
    try {
        const updatedData = { id, name, show_Code, start_Date, movieId, roomId };
        await put(`/v1/Shows/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Shows', error);
        throw error;
    }
};

export const deleteShows = async (id) => {
    try {
        await del(`/v1/Shows/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Shows', error);
        throw error;
    }
};
