import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getOrders, deleteOrders } from '~/services/Orders/orderService';


function Orders() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.show_Code.toLowerCase().includes(search.toLowerCase()));
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
        getOrders()
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

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteOrders(deleteId)
            .then(() => {
                toast.success('Orders has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Orders', error);
            });
    };

    const handleClose = () => {
        setDeleteShow(false);
    };

    const handleDeleteShow = () => setDeleteShow(true);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Orders</h1>
                <div className="section-header-button">
                    <a href="/orders/create" className="btn btn-primary">
                        Add New
                    </a>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Orders</a>
                    </div>
                    <div className="breadcrumb-item">All Orders</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Orders</h4>
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
                                                        <th>Order_Code</th>
                                                        <th>Total</th>
                                                        <th>Detailsiscount_Amount</th>
                                                        <th>Discount_Code</th>
                                                        <th>Final_Total</th>
                                                        <th>Status</th>
                                                        <th>Payment_Method</th>
                                                        <th>Is_Paid</th>
                                                        <th>QR Code</th>
                                                        <th>User_Id</th>
                                                        <th>Show_Id</th>
                                                        <th>OrderFoods</th>
                                                        <th>Tickets</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.order_Code}</td>
                                                            <td>{item.total}</td>
                                                            <td>{item.discount_Amount}</td>
                                                            <td>{item.discount_Code}</td>
                                                            <td>{item.final_Total}</td>
                                                            <td>{item.status}</td>
                                                            <td>{item.payment_Method}</td>
                                                            <td>{item.is_Paid}</td>
                                                            <td>{item.qR_Code}</td>
                                                            <td>{item.user_Id}</td>
                                                            <td>{item.show_Id}</td>
                                                            <td>{item.orderFoods}</td>
                                                            <td>{item.tickets}</td>

                                                            <td colSpan={2}>
                                                            <a
                                                                    href={`/Orders/edit/${item.id}`}
                                                                    className="btn btn-primary"
                                                                >
                                                                    Edit
                                                                </a>
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

            <Modal show={deleteShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Orders?</Modal.Body>
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

export default Orders;