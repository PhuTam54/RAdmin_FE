import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getShopsData, createShops, editShopsData, updateShops, deleteShops } from '~/services/shopService';

function Shops() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [floosId, setFloosId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [image, setImg] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [editId, setEditId] = useState('');
    const [editCategoryId, setEditCategoryId] = useState('');
    const [editFloosId, setEditFloosId] = useState('');
    const [editName, setEditName] = useState('');
    const [editImg, setEditImage] = useState('');
    const [editAddress, setEditAddress] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [deleteId, setDeleteId] = useState('');

    // id: 2,
    // name: 'Adidas',
    // image: 'Adidas/img',
    // address: '18A',
    // phone_Number: '0987654321',
    // description: 'Adidasin you area',
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
        getShopsData()
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
        createShops(floosId, categoryId, name, image, address, phone, description)
            .then(() => {
                getData();
                clear();
                handleClose();
                toast.success('Shops has been created');
            })
            .catch((error) => {
                toast.error('Failed to create Shops', error);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        editShopsData(id)
            .then((data) => {
                setEditId(id);
                setEditFloosId(data.floosId);
                setEditCategoryId(data.categoryId);
                setEditName(data.name);
                setEditImage(data.image);
                setEditPhone(data.phone);
                setEditAddress(data.address);
            })
            .catch((error) => console.error('Error fetching Shops data:', error));
    };

    const handleUpdate = () => {
        updateShops(editId, editFloosId, editCategoryId, editName, editImg, editPhone, editAddress, editDescription)
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

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteShops(deleteId)
            .then(() => {
                toast.success('Shops has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Shops', error);
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
        setEditId('');
        setEditFloosId('');
        setEditCategoryId('');
        setEditName('');
        setEditAddress('');
        setEditImage('');
        setEditPhone('');
        setEditDescription('');
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
                <div className="section-header-button">
                    <a href="/createshops" className="btn btn-primary">
                        Add New
                    </a>
                </div>
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
                                {/* <div className="section-header-button">
                                    <button className="btn btn-primary" onClick={() => handleSave()}>
                                        Create
                                    </button>
                                </div> */}
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
                                                        <th>Floors Id</th>
                                                        <th>Category Id</th>
                                                        <th>Name</th>
                                                        <th>Img</th>
                                                        <th>Phone</th>
                                                        <th>Address</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.floosId}</td>
                                                            <td>{item.categoryId}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.image}</td>
                                                            <td>{item.phone_Number}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.description}</td>
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
            {/* <Modal show={createShow} onHide={handleClose}>
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
                            <Col>
                                <input
                                    id="fileInput"
                                    type="file"
                                    className="form-control"
                                    value={image}
                                    onChange={(e) => setImg(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={phone_Number}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
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
            </Modal> */}

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
