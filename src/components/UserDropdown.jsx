import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="relative">
      {/* Profile Photo Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
      >
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-2">
            <p className="px-4 py-2 text-sm text-gray-700">
              Welcome, {profile.name}
            </p>
            <hr className="my-1" />
            <button
              onClick={() => navigate('/profile')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;