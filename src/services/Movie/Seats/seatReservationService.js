import { get, post, put, del } from '~/utils/httpRequest';

export const getSeatReservations = async () => {
    try {
        const response = await get('/SeatReservations/');
        return response;
    } catch (error) {
        console.error('Error fetching SeatReservations data:', error);
        throw error;
    }
};

export const createSeatReservations = async (reservation_Expires_At, seat_Id) => {
    try {
        const newData = { reservation_Expires_At, seat_Id };
        await post('/SeatReservations', newData);
    } catch (error) {
        console.error('Failed to create SeatReservations', error);
        throw error;
    }
};

export const editSeatReservations = async (id) => {
    try {
        const response = await get(`/SeatReservations/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching SeatReservations data:', error);
        throw error;
    }
};

export const updateSeatReservations = async (id, reservation_Expires_At, seat_Id) => {
    try {
        const updatedData = { id, reservation_Expires_At, seat_Id };
        await put(`/SeatReservations/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update SeatReservations', error);
        throw error;
    }
};

export const deleteSeatReservations = async (id) => {
    try {
        await del(`/SeatReservations/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete SeatReservations', error);
        throw error;
    }
};