import { get, post, put, del } from '~/utils/httpRequest';

export const getSeatPricings = async () => {
    try {
        const response = await get('/SeatPricings/');
        return response;
    } catch (error) {
        console.error('Error fetching SeatPricings data:', error);
        throw error;
    }
};

export const createSeatPricings = async (price, show_Id, seat_Type_Id) => {
    try {
        const newData = { price, show_Id, seat_Type_Id };
        await post('/SeatPricings', newData);
    } catch (error) {
        console.error('Failed to create SeatPricings', error);
        throw error;
    }
};

export const editSeatPricings = async (id) => {
    try {
        const response = await get(`/SeatPricings/id?id=${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching SeatPricings data:', error);
        throw error;
    }
};

export const updateSeatPricings = async (id, price, show_Id, seatType_Id) => {
    try {
        const updatedData = { id, price, show_Id, seatType_Id };
        await put(`/SeatPricings/id?id=${id}`, updatedData);
    } catch (error) {
        console.error('Failed to update SeatPricings', error);
        throw error;
    }
};

export const deleteSeatPricings = async (id) => {
    try {
        await del(`/SeatPricings/id?id=${id}`);
        return true;
    } catch (error) {
        console.error('Failed to delete SeatPricings', error);
        throw error;
    }
};