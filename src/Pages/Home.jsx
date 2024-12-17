import React, { useEffect, useState } from 'react';
import Card from './Card';
import CardSlider from '../components/CardSlider';
import AdminNavbar from '../admincomponents/AdminNavbar';
import UserSideBar from '../components/UserSideBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const backend_API = import.meta.env.VITE_API_URL;

const Home = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'));
    const [auth, setAuth] = useState(false);

    // Function to fetch categories from the backend API
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${backend_API}/category/getAllCategory`);
            const sortedCategories = response.data.category.sort((a, b) =>
                a.categoryName.localeCompare(b.categoryName)
            );
            setCategories(sortedCategories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (token) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [token]);

    return (
        <>
            <AdminNavbar />
         <UserSideBar/>
            <div className='mt-32'>
                {auth ? <Card /> : <></>}
                <CardSlider /> {/* Render the CardSlider component here */}
            </div>
        </>
    );
};

export default Home;