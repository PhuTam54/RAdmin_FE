import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateRooms, editRooms } from '~/services/Movie/roomService';
import { useNavigate, useParams } from 'react-router-dom';

function EditRooms() {
    const [shops, setShops] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editSlug: '',
        editName: '',
        editRows: '',
        editColumns: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const RoomsData = await editRooms(id);
                setData({
                    editId: RoomsData.id,
                    editSlug: RoomsData.slug,
                    editName: RoomsData.name,
                    editRows: RoomsData.rows,
                    editColumns: RoomsData.columns,
                });

            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateRooms(data.editId, data.editName, data.editSlug, data.editRows, data.editColumns);
            toast.success('Shop updated successfully');
            navigate('/Rooms');
        } catch (error) {
            toast.error('Failed to update Shop');
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
                <h1>Edit Rooms</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Roomss</a>
                    </div>
                    <div className="breadcrumb-item">Edit Rooms</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Rooms</h2>
                <p className="section-lead">On this page you can edit Rooms details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Rooms Details</h4>
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
                                                value={data.editId}
                                                disabled
                                                onChange={(e) => setData({ ...data, editId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Name
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editName}
                                                onChange={(e) => setData({ ...data, editName: e.target.value })}
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
                                                value={data.editRows}
                                                onChange={(e) => setData({ ...data, editRows: e.target.value })}
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
                                                value={data.editColumns}
                                                onChange={(e) => setData({ ...data, editColumns: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update Rooms
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

export default EditRooms;
