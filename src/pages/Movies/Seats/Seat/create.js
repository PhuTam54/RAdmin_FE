import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createSeats } from '~/services/Movie/Seats/seatService';
import { useNavigate } from 'react-router-dom';

function CreateSeats() {
    const [rooms, setRooms] = useState([]);
    const [seat_Type, setSeat_Type] = useState([]);

    const [data, setData] = useState({
        row_Number: '',
        seat_Number: '',
        seat_Type_Id: '',
        room_Id: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomsData = await fetch('https://localhost:7168/api/v1/Rooms');
                const roomsJson = await roomsData.json();
                setRooms(roomsJson);

                const seatTypesData = await fetch('https://localhost:7168/api/v1/SeatTypes');
                const seatTypeJson = await seatTypesData.json();
                setSeat_Type(seatTypeJson);
            } catch (error) {
                console.error('Error fetching Seats data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createSeats(data.row_Number, data.seat_Number, data.seat_Type_Id, data.room_Id);
            toast.success('Seats created successfully');
            navigate('/Seats');
        } catch (error) {
            toast.error('Failed to create Seats');
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
                <h1>Create Seats</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Seats</a>
                    </div>
                    <div className="breadcrumb-item">Create Seats</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Seats</h2>
                <p className="section-lead">On this page you can create a new Seats and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Seats</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Row Number
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Row Number"
                                                value={data.row_Number}
                                                onChange={(e) => setData({ ...data, row_Number: e.target.value })}
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
                                                placeholder="Enter Seats Code"
                                                value={data.seat_Number}
                                                onChange={(e) => setData({ ...data, seat_Number: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Rooms Id
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
                                                        {room.id}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Seat Type
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.seat_Type_Id}
                                                onChange={(e) => setData({ ...data, seat_Type_Id: e.target.value })}
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
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Seats
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

export default CreateSeats;
