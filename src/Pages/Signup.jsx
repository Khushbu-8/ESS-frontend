import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Signup =() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigete = useNavigate();

  const handleSubmits = async (e) => {
    e.preventDefault();

  }


  return (
    <>
      <h1>sign in</h1>
    </>
  );
}

export default Signup