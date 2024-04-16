import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateSeats, editSeats } from '~/services/Movie/Seats/seatService';
import { useNavigate, useParams } from 'react-router-dom';

function EditSeats() {
    const [rooms, setRooms] = useState([]);
    const [seat_Type, setSeat_Type] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editRow_Number: '',
        editSeat_Number: '',
        editSeat_Type_Id: '',
        editRoom_Id: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const showData = await editSeats(id);
                setData({
                    editId: showData.id,
                    editRow_Number: showData.show_Code,
                    editSeat_Number: showData.start_Date,
                    editRoom_Id: showData.room_Id,
                    editSeat_Type_Id: showData.seat_Type_Id,
                });

                const roomsData = await fetch('https://localhost:7168/api/v1/Rooms');
                const roomsJson = await roomsData.json();
                setRooms(roomsJson);

                const seatTypesData = await fetch('https://localhost:7168/api/v1/SeatTypes');
                const seatTypeJson = await seatTypesData.json();
                setSeat_Type(seatTypeJson);
            } catch (error) {
                console.error('Error fetching Show data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateSeats(data.editId, data.editRow_Number, data.editSeat_Number, data.editRoom_Id, data.editSeat_Type_Id);
            toast.success('Show updated successfully');
            navigate('/Seats');
        } catch (error) {
            toast.error('Failed to update Show');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/Seats" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Edit Show</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Seats</a>
                    </div>
                    <div className="breadcrumb-item">Edit Show</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Show</h2>
                <p className="section-lead">On this page you can edit Show details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Show Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Show Id"
                                                disabled
                                                value={data.editId}
                                                onChange={(e) => setData({ ...data, editId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Row Number
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Row Number"
                                                value={data.editRow_Number}
                                                onChange={(e) => setData({ ...data, editRow_Number: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Seat Number
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Seat Number"
                                                value={data.editSeat_Number}
                                                onChange={(e) => setData({ ...data, editSeat_Number: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Seat Type
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editSeat_Type_Id}
                                                onChange={(e) => setData({ ...data, editSeat_Type_Id: e.target.value })}
                                            >
                                                <option>Select Seat Type</option>
                                                {seat_Type.map((type) => (
                                                    <option key={type.id} value={type.id}>
                                                        {type.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Room Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.room_Id}
                                                onChange={(e) => setData({ ...data, room_Id: e.target.value })}
                                            >
                                                <option>Select Rooms</option>
                                                {rooms.map((room) => (
                                                    <option key={room.id} value={room.id}>
                                                        {room.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update Show
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default EditSeats;
