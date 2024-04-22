import { get, post, put, del } from '~/utils/httpRequest';

export const getSeatTypes = async () => {
    try {
        const response = await get('/SeatTypes/');
        return response;
    } catch (error) {
        console.error('Error fetching SeatTypes data:', error);
        throw error;
    }
};

export const createSeatTypes = async (name) => {
    try {
        const newData = { name };
        await post('/SeatTypes', newData);
    } catch (error) {
        console.error('Failed to create SeatTypes', error);
        throw error;
    }
};

export const editSeatTypes = async (id) => {
    try {
        const response = await get(`/SeatTypes/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching SeatTypes data:', error);
        throw error;
    }
};

export const updateSeatTypes = async (id, name) => {
    try {
        const updatedData = { id, name };
        await put(`/SeatTypes/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update SeatTypes', error);
        throw error;
    }
};

export const deleteSeatTypes = async (id) => {
    try {
        await del(`/SeatTypes/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete SeatTypes', error);
        throw error;
    }
};
