import React from 'react'
import AdminHeader from '../admincomponents/AdminHeader'
import AdminSidebar from '../admincomponents/AdminSidebar'

const ManageCatagory = () => {
    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <section className='mt-32'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h4>Manage Catagory</h4>
                                    <button className="btn bg-blue  text-white " data-bs-toggle="modal" data-bs-target="#exampleModal">Add Catagory</button>
                                </div>
                                <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label htmlFor="recipient-name" className="col-form-label">Category Name:</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="recipient-name" className="col-form-label">Category Image:</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Category Name</th>
                                                <th>Category Image</th>
                                                <th>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Electronics</td>
                                                <td><img src="https://via.placeholder.com/100" alt="" /></td>
                                                <td className='gap-2'>
                                                    <button className="btn bg-green text-white ">Edit</button>
                                                    <button className="btn bg-orange text-white ms-2">Delete</button>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManageCatagory