import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserDropdown() {
  const [profile,setProfile] = useState("");
  const navigate = useNavigate();

  const fetchData = async() => {

    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token, "token");
    const cookitoken = Cookies.get('refreshToken');
    console.log(cookitoken, "cookietoken");
     // Replace 'your-cookie-name' with the cookie storing the token

    if (!token) {
        console.log("Token not found in cookies.");
    }
    // if (token) {
    //     // Split the token into its components
    //     const payload = token.split('.')[1];
    //     // Decode the Base64 URL-encoded payload
    //     const decodedPayload = JSON.parse(atob(payload));
    //     console.log("Decoded Token:", decodedPayload.user);
    //     setProfile(decodedPayload.user)

    // } else {
    //     console.error("No token found.");
    // }
    // const backend_API = "https://ees-121-backend.vercel.app/auth/getuser"
    // try {
    //     const response = await axios.get(backend_API, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //         withCredentials: true
    //     });
    //    const data = await response.data;
    //     console.log("user data", data);
              
    // } catch (error) {
    //     console.log(error);
        
    // }


}


useEffect(() => {
    fetchData()
}, [])


  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login
  };

  return (
    <>
   <div className="dropdown dropdown-endrounded-lg m-3 border bg-red">
  <div tabIndex={0} role="button" className="">
    <div class="img w-50 h-[50px] rounded-lg border bg-red overflow-hidden">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
    </div>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li>
     <h1>Welcome :</h1>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
     <button onClick={handleLogout}>logout</button>
    </li>
  </ul>
</div>
    </>
  );
}

export default UserDropdown;
