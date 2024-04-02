import {React, useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createShops } from '~/services/shopService';

function CreateShops() {
    const [floosId, setFloosId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [image, setImg] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = () => {
        createShops(floosId, categoryId, name, image, address, phone, description)
            .then(() => {
                // getData();
                clear();
                toast.success('Shops has been created');
            })
            .catch((error) => {
                toast.error('Failed to create Shops', error);
            });
    };

    const clear = () => {
        setFloosId('');
        setCategoryId('');
        setName('');
        setImg('');
        setAddress('');
        setPhone('');
        setDescription('');
    };
    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/shops" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create New Shop</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shops</a>
                    </div>
                    <div className="breadcrumb-item">Create New Shop</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create New Shop</h2>
                <p className="section-lead">On this page you can create a new Shop and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Shop</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Name
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Floors Id
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Tech</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Category Id
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Tech</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Thumbnail
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <div id="image-preview" className="image-preview">
                                            <label htmlFor="image-upload" id="image-label">
                                                Choose File
                                            </label>
                                            <input type="file" name="image" id="image-upload" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Phone
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Address
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Description
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                                    <div className="col-sm-12 col-md-7">
                                        <button className="btn btn-primary">Create Shop</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateShops;
