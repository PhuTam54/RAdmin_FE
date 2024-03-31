import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Floors() {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            console.log(token);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [number, setNumber] = useState('');
    const [editId, setEditId] = useState('');
    const [editNumber, setEditNumber] = useState('');
    const [data, setData] = useState([]);

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.number.toString().toLowerCase().includes(search.toLowerCase()));
        setSearchedData(filteredData);
    }, [search, data]);

    //Page
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 7;
    const lastindex = currentPage * recordsPerPage;
    const firstIndex = lastindex - recordsPerPage;
    const records = searchedData.slice(firstIndex, lastindex);
    const npage = Math.ceil(searchedData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        getData();
        
    }, []);

    const getData = () => {
        axiosInstance
            .get(`https://localhost:7168/api/v1/Floors`)
            .then((response) => {
                setData(response.data);
                setSearchedData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        axiosInstance
            .get(`https://localhost:7168/api/v1/Floors/id/${id}`)
            .then(({ data }) => {
                setEditId(id);
                setEditNumber(data.number);
            })
            .catch((error) => console.error('Error fetching Floors data:', error));
    };

    const handleUpdate = () => {
        const url = `https://localhost:7168/api/v1/Floors/id/${editId}`;
        const updatedData = {
            id: editId,
            number: editNumber,
        };
        axiosInstance
            .put(url, updatedData)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('Floors has been updated');
            })
            .catch((error) => {
                console.error('Failed to update Floors:', error);
                toast.error('Failed to update Floors. Please try again later.');
            });
    };

    const handleDelete = () => {
        handleDeleteShow();
    };

    const handleDeleteConfirm = async (id) => {
        if (window.confirm('delete') === true) {
            axiosInstance
                .delete(`https://localhost:7168/api/v1/Floors/id?id=${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success('delete success');
                        getData();
                    }
                })
                .catch((error) => {
                    toast.error('delete failde');
                });
        }
    };

    const handleSave = () => {
        handleCreateShow();
    };
    const handleSaveConfirm = () => {
        if (number) {
            const url = 'https://localhost:7168/api/v1/Floors';
            const newData = {
                number: number,
            };
            axiosInstance
                .post(url, newData)
                .then(() => {
                    getData();
                    clear();
                    handleClose();
                    toast.success('Floors has been created');
                })
                .catch((error) => {
                    toast.error('Failed to create Floors', error);
                });
        }
    };

    const clear = () => {
        setNumber('');
        setEditId('');
        setEditNumber('');
    };

    const handleClose = () => {
        setDeleteShow(false);
        setCreateShow(false);
        setEditShow(false);
    };

    const handleEditShow = () => setEditShow(true);
    const handleDeleteShow = () => setDeleteShow(true);
    const handleCreateShow = () => setCreateShow(true);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Floors</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Floors</a>
                    </div>
                    <div className="breadcrumb-item">All Floors</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Floors</h4>
                                <div className="section-header-button">
                                    <button className="btn btn-primary" onClick={() => handleSave()}>
                                        Create
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <>
                                        <div className="float-left">
                                            <select className="form-control selectric">
                                                <option>Action For Selected</option>
                                            </select>
                                        </div>
                                        <div className="float-right">
                                            <form>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                        onChange={(e) => setSearch(e.target.value)}
                                                    />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary">
                                                            <i className="fas fa-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="clearfix mb-3" />
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Number</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.number}</td>
                                                            <td colSpan={2}>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => handleEdit(item.id)}
                                                                >
                                                                    Edit
                                                                </button>
                                                                &nbsp;
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => handleDeleteConfirm(item.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="float-right">
                                            <nav>
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a
                                                            className="page-link"
                                                            href="#"
                                                            aria-label="Previous"
                                                            onClick={prePage}
                                                        >
                                                            «
                                                        </a>
                                                    </li>

                                                    {numbers.map((n, i) => (
                                                        <li
                                                            className={`page-item ${currentPage === n ? 'active' : ''}`}
                                                            key={i}
                                                        >
                                                            <a
                                                                className="page-link"
                                                                href="#"
                                                                onClick={() => changeCPage(n)}
                                                            >
                                                                {n}
                                                            </a>
                                                        </li>
                                                    ))}
                                                    <li className="page-item">
                                                        <a
                                                            className="page-link"
                                                            href="#"
                                                            aria-label="Next"
                                                            onClick={nextPage}
                                                        >
                                                            »
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={createShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Floors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveConfirm}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Floors</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Number"
                                    value={editNumber}
                                    onChange={(e) => setEditNumber(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deleteShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Floors?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </section>
    );
}

export default Floors;
