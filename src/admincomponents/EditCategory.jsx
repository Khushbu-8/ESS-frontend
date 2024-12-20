import React, { useEffect, useState } from 'react'

const EditCategory = ({ editcategory }) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryImg, setCategoryImg] = useState(null);
     const [preview, setPreview] = useState();
    console.log(editcategory);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryName || !categoryImg) {
            alert("Please fill all fields");
            return;
        }

        const formData = new FormData();
        formData.append("categoryName", categoryName);
        formData.append("category", categoryImg);
        console.log('Edit FormData:', Object.fromEntries(formData)); // Debugging
        try {
            const response = await axios.post(`${backend_API}/category/updateCategory`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Category edit:");

            // Clear the form and close the modal
            setCategoryName("");
            setCategoryImg(null);
            setPreview(null);
        } catch (error) {
            console.error("Error adding category:", error);
        }
    };
    useEffect(() => {
        if (editcategory) {
            setCategoryName(editcategory.categoryName);
            setCategoryImg(editcategory.categoryImg || null);
            if (editcategory.categoryImg) {
                setPreview(editcategory.categoryImg);
            }
        }
    }, [editcategory])
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCategoryImg(file);
            const newPreview = URL.createObjectURL(file);
            setPreview(newPreview);
        }
    };

    return (
        <>
           <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">edit Category</h1>
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
                                            onChange={handleFileChange}
                                            accept="image/*"
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


        </>
    )
}

export default EditCategory