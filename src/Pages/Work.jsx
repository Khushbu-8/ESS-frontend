import React from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import UserSideBar from '../components/UserSideBar'
import Recievedrequest from '../components/Recievedrequest'
import AllRequests from './AllRequests'
import { Link } from 'react-router-dom'

const Work = () => {

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
            <AdminNavbar />
            <UserSideBar />
            <div className='mt-32'>
            <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex gap-3">

                                {
                                    requests.map((req, i) => {
                                        return (
                                            <div className="receivReqBtn">
                                                <Link to={req.path} className={`btn btn-success rounded-0 text-white`}>
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
                {/* <Senedrequest/>    */}
                <Recievedrequest />
                {/* <AllRequests/> */}
            </div>
        </>
    )
}

export default Work