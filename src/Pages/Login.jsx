import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const backend_API = "https://ees-121-backend.vercel.app/auth/loginUserweb";

        const response = await axios.post(backend_API, {
            phone,
            password,
        }, {
            withCredentials: true, // Important: send cookies with the request
        })
        console.log(response.data);
        console.log(JSON.stringify(response?.data));
        

        if (response.status === 200) {
            navigate("/home"); // Corrected 'naviget' to 'navigate'
            console.log("Login Successful...");
        }
    } catch (error) {
        console.log(error, "fetch error");
    }
};


  return (
    <>
    <h1>loginUserweb</h1>
    <form onSubmit={handleSubmit}>
      <label>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
      />
      <br/>
      <br/>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value
      )}/>
      <br/>
      
    </form>
    </>
  );
}

export default Login;