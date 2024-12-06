import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

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

            <section>
                <div className="container">
                    <div className="row">
                    <h3 className="text-bold py-2 px-4">Servieces</h3>
                        <div className='col-12 '>
                            <form action="" onSubmit={hendleSubmit} className='d-flex flex-wrap'>

                                <div className="col-12 col-md-6 col-lg-3">

                                    <div htmlFor="" className='d-flex align-items-center border border-2 rounded-md p-2 m-1'>
                                        <input
                                            type="text"
                                           
                                            className=' w-100 outline-0 bg-transparent ' placeholder="Search For Services" />
                                        <button type='submit'>
                                            <FaSearch className='text-lg' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div >

            </section>

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