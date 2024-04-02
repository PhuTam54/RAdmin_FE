import { get, post, put, del } from '~/utils/httpRequest';

export const getFloorsData = async () => {
    try {
        const response = await get('/v1/Floors/');
        return response;
    } catch (error) {
        console.error('Error fetching Floors data:', error);
        throw error;
    }
};

export const createFloors = async (number) => {
    try {
        const newData = { number };
        await post('/v1/Floors', newData);
    } catch (error) {
        console.error('Failed to create Floors', error);
        throw error;
    }
};

export const editFloorsData = async (id) => {
    try {
        const response = await get(`/v1/Floors/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Floors data:', error);
        throw error;
    }
};

export const updateFloors = async (id, number) => {
    try {
        const updatedData = { id, number };
        await put(`/v1/Floors/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Floors', error);
        throw error;
    }
};

export const deleteFloors = async (id) => {
    try {
       
        await del(`/v1/Floors/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Floors', error);
        throw error;
    }
};
