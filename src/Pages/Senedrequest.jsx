import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import AdminNavbar from '../admincomponents/AdminNavbar'
import UserSideBar from '../components/UserSideBar'

const Senedrequest = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const LoginData = JSON.parse(localStorage.getItem("Users"))
    const [loginData,setLoginData] = useState(LoginData)
    console.log(loginData,"req");

    const requests = [
        {
            id: 1,
            name: "Sended Request",
            path : "/work/sendrequest"
        },
        {
            id: 1,
            name: "Resived Request",
            path : "/work"
        },
    ]


    return (
        <>
        <AdminNavbar/>
        <UserSideBar/>
        <div className='mt-32'>
        <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex gap-3">

                                {
                                    requests.map((req, i) => {
                                        return (
                                            <div className="receivReqBtn">
                                                <Link to={req.path} className='btn btn-success text-white'>
                                                    {req.name}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>
        <section>
                <div className="container">
                    <div className="row">

                        <div className="col-12 pt-3">
                            <h4>Sended Request</h4>
                        </div>
                        <div className="col-12 flex flex-wrap py-2">
                            <div className="col-12 col-md-6 w-full col-lg-4 p-1">
                                <div className="bg-white border rounded-md overflow-hidden d-flex shadow flex-md-column " style={{position:"relative"}}>
                                    <div className='col-5 col-md-12 d-flex'>
                                      <div className="img p-2  " style={ {height:"200px" , width:"100%"}}>
                                      <img className=' img-fluid'
                                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                            alt="Movie" style={{width:"100%",height:"100%",objectFit:"cover" ,objectPosition:"top"}} />
                                      </div>
                                      <span className='bg-orange position-absolute rounded-full top-5 end-5  p-1 text-sm text-white px-2'>open</span>
                                    </div>
                                    <div className="p-3 col-10 col-md-12 ">
                                        <h4 className="">name</h4>
                                        <h6 className='pt-2'>Category</h6>
                                        <p>address</p>
                                        <div className="rating rating-sm d-flex align-items-center">
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' /> <span className='ps-2'>rating</span>
                                        </div>

                                        <div className='pt-2 d-flex justify-content-end'>
                                            <Link className='btn pt-2  bg-orange rounded-1 text-semibold text-white '>
                                                cancel
                                            </Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 w-full col-lg-4 p-1">
                                <div className="bg-white border rounded-md overflow-hidden d-flex shadow flex-md-column " style={{position:"relative"}}>
                                    <div className='col-5 col-md-12 d-flex'>
                                      <div className="img p-2  " style={ {height:"200px" , width:"100%"}}>
                                      <img className=' img-fluid'
                                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                            alt="Movie" style={{width:"100%",height:"100%",objectFit:"cover" ,objectPosition:"top"}} />
                                      </div>
                                      <span className='bg-orange position-absolute rounded-full top-5 end-5  p-1 text-sm text-white px-2'>open</span>
                                    </div>
                                    <div className="p-3 col-10 col-md-12 ">
                                        <h4 className="">name</h4>
                                        <h6 className='pt-2'>Category</h6>
                                        <p>address</p>
                                        <div className="rating rating-sm d-flex align-items-center">
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' /> <span className='ps-2'>rating</span>
                                        </div>

                                        <div className='pt-2'>
                                            <Link className='btn pt-2  bg-orange rounded-1 text-semibold text-white '>
                                                View Profile
                                            </Link>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
         
          
        </>
    )
}

export default Senedrequest