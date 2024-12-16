import axios from 'axios';
import React, { useState } from 'react'
const backend_API = import.meta.env.VITE_API_URL; 

const BannerAdd = () => {
    const [image, setImage] = useState("");
    const token = JSON.parse(localStorage.getItem('token'))
console.log(image,"sellected image");

    const hendleSubmitIng = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("token", token);
        try {
            const response = await axios.post(`${backend_API}/banner`, formData);
            console.log(response.data);
            alert("Banner Added Successfully");
            } catch (error) {
                console.error(error);
                }
       
        // try {
        //     const response = await axios.post(`${backend_API}/banner/addBanner`,{
        //         imageUrl : image
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${token}`
        //         },
        //     });
        //     const data = await response.data;
           
        //     console.log(data.user, "data profile");
        //     if (response.status === 200) {
              
              
        //         alert("profile Successful...");
        //     }
        // } catch (error) {
        //     console.log(error);
        //     return false;
        // }


    }


    return (
        <>
            <form action="" onSubmit={hendleSubmitIng} enctype="multipart/form-data" >
                <div className='' >
                    <label for="file-upload" class="h-[100px] btn d-inline-block border border-orange d-flex justify-content-center align-items-center  text-center ">
                        Add Offer Benner
                    </label>
                    <input type="file" id="file-upload" name="imageUrl"  onChange={ (e) => setImage(e.target.files[0]) } />
                    <img src={image} alt="" />
                    <input type="submit"  name="" id="" />

                </div>
            </form>

        </>
    )
}

export default BannerAdd
