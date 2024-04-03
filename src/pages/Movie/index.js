import images from '~/assets/img';
import * as productService from '~/services/productService';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://example.com/api/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Posts</h1>
                <div className="section-header-button">
                    <a href="/product/create" className="btn btn-primary">
                        Add New
                    </a>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Posts</a>
                    </div>
                    <div className="breadcrumb-item">All Posts</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Posts</h4>
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
                                                    <input type="text" className="form-control" placeholder="Search" />
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
                                            {products.map((product) => (
                                                <table key={product.id} className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <th className="text-center pt-2">
                                                                <div className="custom-checkbox custom-checkbox-table custom-control">
                                                                    <input
                                                                        type="checkbox"
                                                                        data-checkboxes="mygroup"
                                                                        data-checkbox-role="dad"
                                                                        className="custom-control-input"
                                                                        id="checkbox-all"
                                                                    />
                                                                    <label
                                                                        htmlFor="checkbox-all"
                                                                        className="custom-control-label"
                                                                    >
                                                                        &nbsp;
                                                                    </label>
                                                                </div>
                                                            </th>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Image</th>
                                                            <th>Price</th>
                                                            <th>Description</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="custom-checkbox custom-control">
                                                                    <input
                                                                        type="checkbox"
                                                                        data-checkboxes="mygroup"
                                                                        className="custom-control-input"
                                                                        id="checkbox-2"
                                                                    />
                                                                    <label
                                                                        htmlFor="checkbox-2"
                                                                        className="custom-control-label"
                                                                    >
                                                                        &nbsp;
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>{product.id}</td>
                                                            <td>
                                                                {product.name}
                                                                <div className="table-links">
                                                                    <a href="#">View</a>
                                                                    <div className="bullet" />
                                                                    <a href="#">Edit</a>
                                                                    <div className="bullet" />
                                                                    <a href="#" className="text-danger">
                                                                        Trash
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#">
                                                                    <img
                                                                        alt={product.name}
                                                                        src={images.avatar}
                                                                        className="rounded-circle"
                                                                        width={35}
                                                                        data-toggle="title"
                                                                        title=""
                                                                        style={{ maxWidth: '100px' }}
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td>{product.price}</td>
                                                            <td>{product.description}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ))}
                                        </div>
                                        <div className="float-right">
                                            <nav>
                                                <ul className="pagination">
                                                    <li className="page-item disabled">
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">«</span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li className="page-item active">
                                                        <a className="page-link" href="#">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">»</span>
                                                            <span className="sr-only">Next</span>
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
        </section>
    );
}

export default Product;
