import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile,setProfile] = useState();
  const navigate = useNavigate();

  // Simulated user data (replace with actual data from API or token)
  const user = {
    name: 'John Doe',
    profilePhoto: 'https://via.placeholder.com/150', // Replace with actual photo URL
  };
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

useEffect(() => {
    fetchData()
}, [])


  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login
  };

  return (
    <>
   <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="">
    <div className="img w-50 h-50 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full h-full' />
    </div>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
     <button onClick={{handleLogout}}>logout</button>
    </li>
  </ul>
</div>
    </>
  );
}

export default UserDropdown;
