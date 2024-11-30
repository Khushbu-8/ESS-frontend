import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserDropdown() {
  const [profile,setProfile] = useState("");
  const navigate = useNavigate();

  const fetchData = () => {

    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token, "token");
    if (token) {
        // Split the token into its components
        const payload = token.split('.')[1];
        // Decode the Base64 URL-encoded payload
        const decodedPayload = JSON.parse(atob(payload));
        console.log("Decoded Token:", decodedPayload.user);
        setProfile(decodedPayload.user)
        
    } else {
        console.error("No token found.");
    }
}

console.log("data", profile)
console.log("name", profile.name)

useEffect(() => {
    fetchData()
}, [])


  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login
  };

  return (
    <>
   <div className="dropdown dropdown-end rounded-full m-3 border bg-red">
  <div tabIndex={0} role="button" className="">
    <div class="img w-50 h-[50px] rounded-full border bg-red overflow-hidden">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
    </div>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li>
     <h1>Welcome : {profile.name}</h1>
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
