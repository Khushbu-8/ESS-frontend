import React from 'react'
import { FaUserAlt, FaUserAstronaut, FaUserCheck } from 'react-icons/fa'

const UserCount = ({ Users }) => {
    return (
        <>
            <div>
                <div className="card shadow rounded-4 py-3">
                    <div className="card-body d-flex justify-content-evenly">
                        <div className='pb-3'>
                            <span ><FaUserCheck className='fs-3 w-[50px] h-[50px] text-white p-1 bg-green rounded-full' /></span>
                        </div>

                        <div>
                            <p className="card-text">Totle Users </p>
                            <h5 className="card-title pt-2">{Users.length}</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCount