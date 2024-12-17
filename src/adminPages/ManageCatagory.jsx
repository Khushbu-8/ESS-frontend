import React, { useEffect, useState } from 'react'
import AdminHeader from '../admincomponents/AdminHeader'
import AdminSidebar from '../admincomponents/AdminSidebar'
import axios from 'axios';
import EditCategory from '../admincomponents/EditCategory';
const backend_API = import.meta.env.VITE_API_URL;

const ManageCatagory = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryImg, setCategoryImg] = useState(null);
    const [preview, setPreview] = useState(null);
    const [categories, setCategories] = useState([]);
    const [editcategory, setEditCategory] = useState({});
    // console.log(categoryImg,"categoryImg")
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryName || !categoryImg) {
            alert("Please fill all fields");
            return;
        }

        const formData = new FormData();
        formData.append("categoryName", categoryName);
        formData.append("category", categoryImg);
        console.log('FormData:', Object.fromEntries(formData)); // Debugging

        try {
            const response = await axios.post(`${backend_API}/category/addCategory`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Category added:");
            fetchCategory();
            // Clear the form and close the modal
            setCategoryName("");
            setCategoryImg(null);
            setPreview(null);
        } catch (error) {
            console.error("Error adding category:", error);
        }
    };


    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${backend_API}/category/getAllCategory`);
            const sortedCategories = response.data.category.sort((a, b) =>
                a.categoryName.localeCompare(b.categoryName)
            );

            setCategories(sortedCategories);
            console.log(sortedCategories, "sortedCategories");
        }
        catch (error) {
            console.error("Error fetching categories:", error);
        }
    }
    useEffect(() => {
        fetchCategory();
    }, []);

    const hendeelDelete = async (categorId) => {
        // console.log(categorId,"categorId ");
        try {
            const response = await axios.delete(`${backend_API}/category/deleteCategory`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: { categorId }, // Pass the `categorId` in the `data` field
            });

            console.log(response.data);
            alert("Category deleted successfully");
            fetchCategory(); // Refresh the category list
        } catch (error) {
            console.error("Error deleting category:", error);
            alert("Failed to delete category. Check console for more details.");
        }
    }
    const hendelEdit = (categorysingle) =>{
        console.log(categorysingle);
        
        setEditCategory(categorysingle)
    }
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
                                                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                                                    <div className="mb-3">
                                                        <label htmlFor="recipient-name" className="col-form-label">Category Name:</label>
                                                        <input type="text" className="form-control" placeholder='Category Name' value={categoryName}
                                                            onChange={(e) => setCategoryName(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className='' >
                                                            <label htmlFor="recipient-name" className="col-form-label">Category Image:</label>
                                                            <label for="file-upload" class=" btn d-inline-block border border-orange d-flex justify-content-start align-items-center  ">
                                                                Catgory Image
                                                            </label>
                                                            <input
                                                                type="file"
                                                                id="file-upload"
                                                                name="categoryImg"
                                                                onChange={(e) => {
                                                                    const file = e.target.files[0];
                                                                    setCategoryImg(file);
                                                                    setPreview(URL.createObjectURL(file))
                                                                }}
                                                            />
                                                            {preview && <img src={preview} alt="Preview" width="100" />}
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" className="btn btn-primary"> Add</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <table className="table text-capitalizes table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Category Name</th>
                                                <th>Category Image</th>
                                                <th>Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                categories.map((category, index) => {
                                                    return (
                                                        <tr key={index} className='text-capitalize'>
                                                            <td>{++index}</td>
                                                            <td>{category.categoryName}</td>
                                                            <td className=''><img src={category.image} alt="" width={70} className='d-flex justify-content-center' /></td>
                                                            <td className='gap-2 h-full d-flex flex-wrap justify-content-center'>
                                                                <button className="btn bg-green text-white" onClick={() => hendelEdit(category)} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                                <button className="btn bg-orange text-white ms-2" onClick={() => hendeelDelete(category._id)}>Delete</button>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <EditCategory editcategory={editcategory} />
                                        
                              

                            </div>

                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default ManageCatagory