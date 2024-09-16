import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRooms } from '~/services/Movie/roomService';
import { useNavigate } from 'react-router-dom';

function CreateRooms() {
    const [shops, setShops] = useState([]);

    const [data, setData] = useState({
        slug: '',
        name: '',
        rows: '',
        columns: '',
    });

    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const shopsData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Shops');
    //             const shopJson = await shopsData.json();
    //             setShops(shopJson);
    //         } catch (error) {
    //             console.error('Error fetching Shop data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createRooms( data.name, data.slug, data.rows, data.columns);
            toast.success('Shop created successfully');
            navigate('/Rooms');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/Rooms" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Rooms</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Roomss</a>
                    </div>
                    <div className="breadcrumb-item">Create Rooms</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Rooms</h2>
                <p className="section-lead">On this page you can create a new Rooms and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Rooms</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Name
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Rows
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.rows}
                                                onChange={(e) => setData({ ...data, rows: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Columns
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.columns}
                                                onChange={(e) => setData({ ...data, columns: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Rooms
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

export default CreateRooms;
