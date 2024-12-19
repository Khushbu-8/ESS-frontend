import React from 'react'
import { FaStar } from 'react-icons/fa'

const OfferModal = ({BannerUser}) => {
  return (
   <>
   <section>
                <div className="container">
                    <div className="row">
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">View Offer</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="col-12">
                                            <div className="modalImg h-[100px] img-fluid w-full ">
                                                <img src={BannerUser.imageUrl} className='h-full w-full ' alt="" />
                                            </div>
                                            <div className="ModalContent  pt-3 d-flex">
                                                <div className="col-4 ">
                                                   <div className="img  img-fluid w-[150px]">
                                                   <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="" className='w-full' />
                                                   </div>
                                                </div>
                                                <div className="col-8 d-flex  align-items-center">
                                                   <div className="userContent px-3">
                                                   <h5>User Name</h5>
                                                    <div className="rateUser d-flex align-items-center gap-2 ">
                                                        <span>User</span>
                                                        <div className="rating rating-sm py-1  d-flex flex-wrap align-items-center  justify-content-start">
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' /> 
                                                        </div>
                                                    </div>
                                                    <div className="rateUser d-flex align-items-center gap-2 ">
                                                        <span>Provider</span>
                                                        <div className="rating rating-sm py-1  d-flex flec-wrap align-items-center  justify-content-start">
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' />
                                                            <FaStar className='text-warning' /> 
                                                        </div>
                                                    </div>

                                                   </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                        <button type="button" class="btn bg-green text-white">Contect Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default OfferModal