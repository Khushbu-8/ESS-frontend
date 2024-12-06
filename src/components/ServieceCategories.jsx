import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import SearchScreen from '../Pages/SearchScreen ';

const  ServieceCategories = () => {
    const [sevices, setServices] = useState();
    const [filterrecord, setFilterRecord] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    let categories = [
        { id: 1, name: "A.C. SERVICE" },
        { id: 2, name: "ADVOCATE" },
        { id: 3, name: "ALUMINIUM WORKER" },
        { id: 4, name: "AUTO RICKSHAW" },
        { id: 5, name: "AUTO MOBILE & SALES" },
        { id: 6, name: "BABY SITTING" },
        { id: 7, name: "BAGGI (HORSE CART)" },
        { id: 8, name: "BANK SERVICE" },
        { id: 9, name: "BANQUET HALL" },
        { id: 10, name: "BATTERY SERVICE" },
        
    ];
    const hendleSubmit = (e) => {
        e.preventDefault();

        navigate(`/serviceDetail`, { state: search })
    }
      
    useEffect(() => {
        let filter = [...categories];
        
        
        if (search) {
            filter = filter.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        
        if (sevices) {
            filter = filter.filter(item => item.name === sevices);
        }
        
        setFilterRecord(filter);
    }, [search, sevices])


    return (
        <>
            <section className='mt-2'>
                <div className="container">
                    <div className="row row-cols-3 row-cols-lg-5 g-lg-3">
                            {
                                filterrecord.map((item, i) => {
                                    return (
                                        <div key={++i} className="col">
                                        <div className="border-0 w-100 h-100  text-center items-center rounded-md ">
                                            <figure className='w-full m-0 p-2 '>
                                                <img className='img-fluid w-100 rounded-md overflow-hidden ' style={{ objectFit: "cover" }} src="https://img.daisyui.com/images/profile/demo/2@94.webp" >
                                                </img>
                                            </figure>
                                            <h6 className='text-md'>{item.name}</h6 >
                                        </div>
        
        
                                    </div>
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServieceCategories