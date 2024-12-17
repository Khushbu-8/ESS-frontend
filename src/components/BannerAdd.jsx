import axios from 'axios';
import React, { useState } from 'react'
// const backend_API = import.meta.env.VITE_API_URL; 
// console.log(backend_API);

const BannerAdd = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null); // To show preview
    const token = JSON.parse(localStorage.getItem('token'))
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file)); // Generate a preview URL
      };

    const hendleSubmitIng = async(e) =>{
        e.preventDefault();
   
    if (!image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("banner", image); // Matches the backend field name
    console.log('FormData:', Object.fromEntries(formData));

    try {
       
        const response = await axios.post('https://ees-121-backend.vercel.app/banner/addBanner', // Replace with your API endpoint
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`, // Pass the token in headers
              },
            }
          );
        console.log(response.data)
        alert("Banner Added Successfully")
        if (response.status === 200) {    
        alert("Banner Added Successfully")
        setImage(null);
        setPreview(null);
        }
    } catch (error) {
        console.error("Error details:", error);
        alert("Failed to upload banner. Check the console for more details.");
    }

    }


    return (
        <>
            <form action="" onSubmit={hendleSubmitIng} enctype="multipart/form-data" >
                <div className='' >
                    <label for="file-upload" class="h-[100px] btn d-inline-block border border-orange d-flex justify-content-center align-items-center  text-center ">
                        Add Offer Benner
                    </label>
                    <input type="file" id="file-upload" name="banner"  onChange={handleImageChange} />
                    {preview && <img src={preview} alt="Preview" width="200" />}
                    <input type="submit"  name="" id="" />

                </div>
            </form>

        </>
    )
}

export default BannerAdd
