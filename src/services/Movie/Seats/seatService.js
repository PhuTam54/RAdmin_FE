import { get, post, put, del } from '~/utils/httpRequest';

export const getSeats = async () => {
    try {
        const response = await get('/Seats/');
        return response;
    } catch (error) {
        console.error('Error fetching Seats data:', error);
        throw error;
    }
};

export const createSeats = async (row_Number, seat_Number, room_Id, seat_Type_Id) => {
    try {
        const newData = { row_Number, seat_Number, room_Id, seat_Type_Id };
        await post(`/Seats?roomId=${room_Id}&seatTypeId=${seat_Type_Id}`, newData);
    } catch (error) {
        console.error('Failed to create Seats', error);
        throw error;
    }
};

export const editSeats = async (id) => {
    try {
        const response = await get(`/Seats/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching Seats data:', error);
        throw error;
    }
};

export const updateSeats = async (id, row_Number, seat_Number, room_Id, seat_Type_Id) => {
    try {
        const updatedData = { id, row_Number, seat_Number, room_Id, seat_Type_Id };
        await put(`/Seats/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update Seats', error);
        throw error;
    }
};

export const deleteSeats = async (id) => {
    try {
        await del(`/Seats/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete Seats', error);
        throw error;
    }
};
