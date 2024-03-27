import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://localhost:7168/api/v1/categories')
            .then((response) => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Categories</h1>
                <div className="section-header-button">
                    <a href="/category/create" className="btn btn-primary">
                        Add New
                    </a>
                </div>
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
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Name</th>
                                                        <th>Slug</th>
                                                    </tr>
                                                    {categories.map((category) => (
                                                        <tr key={category.id}>
                                                            <td>
                                                                {category.id}
                                                                <div className="table-links">
                                                                    <a href="#">View</a>
                                                                    <div className="bullet" />
                                                                    <a href="#">Edit</a>
                                                                </div>
                                                            </td>
                                                            <td>{category.name}</td>
                                                            <td>{category.slug}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
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

export default Category;
