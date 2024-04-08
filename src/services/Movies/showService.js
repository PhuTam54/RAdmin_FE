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

export const createShows = async (show_Code, start_Date, movie_Id, room_Id) => {
    try {
        const newData = { show_Code, start_Date, movie_Id, room_Id };
        await post(`/v1/Shows?movieId=${movie_Id}&roomId=${room_Id}`, newData);
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

export const updateShows = async (id, show_Code, start_Date, movie_Id, room_Id) => {
    try {
        const updatedData = { id, show_Code, start_Date, movie_Id, room_Id };
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
