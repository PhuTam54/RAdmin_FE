import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getRooms, createRooms, editRooms, updateRooms, deleteRooms } from '~/services/Movies/roomService';

function Rooms() {
    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [name, setName] = useState('');
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');
    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editRows, setEditRows] = useState('');
    const [editColumns, setEditColumns] = useState('');
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState('');

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

    // Call Api
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getRooms()
            .then((data) => {
                setData(data);
                setSearchedData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleSave = () => {
        handleCreateShow();
    };

    const handleSaveConfirm = () => {
        createRooms(name, rows, columns)
            .then(() => {
                getData();
                clear();
                handleClose();
                toast.success('Rooms has been created');
            })
            .catch((error) => {
                toast.error('Failed to create Rooms', error);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        editRooms(id)
            .then((data) => {
                setEditId(id);
                setEditName(data.name);
                setEditRows(data.rows);
                setEditColumns(data.columns);
            })
            .catch((error) => console.error('Error fetching Rooms data:', error));
    };

    const handleUpdate = () => {
        updateRooms(editId, editName, editRows, editColumns)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('Rooms has been updated');
            })
            .catch((error) => {
                toast.error('Failed to update Rooms', error);
            });
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteRooms(deleteId)
            .then(() => {
                toast.success('Rooms has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Rooms', error);
            });
    };

    const clear = () => {
        setName('');
        setRows('');
        setEditId('');
        setEditName('');
        setEditRows('');
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
                <h1>Categories</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Categories</a>
                    </div>
                    <div className="breadcrumb-item">All Categories</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Categories</h4>
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
                                        <Search setSearch={setSearch} />
                                        <div className="clearfix mb-3" />
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Name</th>
                                                        <th>Rows</th>
                                                        <th>Columns</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.rows}</td>
                                                            <td>{item.columns}</td>
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
                                                                    onClick={() => handleDelete(item.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <Pagination
                                            prePage={prePage}
                                            nextPage={nextPage}
                                            changeCPage={changeCPage}
                                            currentPage={currentPage}
                                            numbers={numbers}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={createShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Rooms</Modal.Title>
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
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Rows"
                                    value={rows}
                                    onChange={(e) => setRows(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Colums"
                                    value={columns}
                                    onChange={(e) => setColumns(e.target.value)}
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
                    <Modal.Title>Edit Rooms</Modal.Title>
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
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Rows"
                                    value={editRows}
                                    onChange={(e) => setEditRows(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Colums"
                                    value={editColumns}
                                    onChange={(e) => setEditColumns(e.target.value)}
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
                <Modal.Body>Are you sure you want to delete this Rooms?</Modal.Body>
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

export default Rooms;
