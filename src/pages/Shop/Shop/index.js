import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Shops() {
    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editSlug, setEditSlug] = useState('');
    const [data, setData] = useState([]);

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
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

        axios
            .get(`https://localhost:7168/api/v1/Shops`)
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
        axios
            .get(`https://localhost:7168/api/v1/Shops/${id}`)
            .then(({ data }) => {
                setEditId(id);
                setEditName(data.name);
                setEditSlug(data.slug);
            })
            .catch((error) => console.error('Error fetching Shops data:', error));
    };

    const handleUpdate = () => {
        const url = `https://localhost:7168/api/v1/Shops/${editId}`;
        const updatedData = {
            name: 'string',
            image: 'string',
            address: 'string',
            phone_Number: 'string',
            description: 'string',
        };
        axios
            .put(url, updatedData)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('Shops has been updated');
            })
            .catch((error) => {
                toast.error('Failed to update Shops', error);
            });
    };

    const handleDelete = () => {
        handleDeleteShow();
    };

    const handleDeleteConfirm = (id) => {
        axios
            .delete(`https://localhost:7168/api/v1/Shops/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Shops has been deleted');
                    getData();
                    handleClose();
                }
            })
            .catch((error) => {
                toast.error('Failed to delete Shops', error);
                handleClose();
            });
    };

    const handleSave = () => {
        handleCreateShow();
    };
    const handleSaveConfirm = () => {
        if (name) {
            const url = 'https://localhost:7168/api/v1/Shops';
            const newData = {
                name: 'string',
                image: 'string',
                address: 'string',
                phone_Number: 'string',
                description: 'string',
            };
            axios
                .post(url, newData)
                .then(() => {
                    getData();
                    clear();
                    handleClose();
                    toast.success('Shops has been created');
                })
                .catch((error) => {
                    toast.error('Failed to create Shops', error);
                });
        }
    };

    const clear = () => {
        setName('');
        setSlug('');
        setEditId('');
        setEditName('');
        setEditSlug('');
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
                <h1>Shops</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shops</a>
                    </div>
                    <div className="breadcrumb-item">All Shops</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Shops</h4>
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
                                                        <th>Name</th>
                                                        <th>Slug</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.slug}</td>
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
                                                                    onClick={() => handleDelete()}
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
                    <Modal.Title>Create Shops</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                    <Modal.Title>Edit Shops</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
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
                <Modal.Body>Are you sure you want to delete this Shops?</Modal.Body>
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

export default Shops;
