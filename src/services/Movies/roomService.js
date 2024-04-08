import { get, post, put, del } from '~/utils/httpRequest';

export const getRooms = async () => {
    try {
        const response = await get('/v1/Rooms/');
        return response;
    } catch (error) {
        console.error('Error fetching Rooms data:', error);
        throw error;
    }
};

export const createRooms = async (name, rows, columns) => {
    try {
        const newData = { name, rows, columns };
        await post('/v1/Rooms', newData);
    } catch (error) {
        console.error('Failed to create Rooms', error);
        throw error;
    }
};

export const editRooms = async (id) => {
    try {
        const response = await get(`/v1/Rooms/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Rooms data:', error);
        throw error;
    }
};

export const updateRooms = async (id, name, rows, columns) => {
    try {
        const updatedData = { id, name, rows, columns };
        await put(`/v1/Rooms/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Rooms', error);
        throw error;
    }
};

export const deleteRooms = async (id) => {
    try {
        await del(`/v1/Rooms/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Rooms', error);
        throw error;
    }
};
