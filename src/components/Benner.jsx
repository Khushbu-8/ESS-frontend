import React from 'react'

const Benner = () => {
    const Benner = [
        {
            id: 1,
            img: "https://img.freepik.com/free-vector/flat-design-business-success-horizontal-banner_23-2149811817.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid"
        },
        {
            id: 1,
            img: "https://img.freepik.com/free-vector/flat-design-business-workshop-sale-banner_23-2149397516.jpg?ga=GA1.1.897959581.1731651336&semt=ais_hybrid"
        },
        {
            id: 1,
            img: "https://img.freepik.com/free-vector/flat-design-business-success-horizontal-banner_23-2149811833.jpg?t=st=1733402004~exp=1733405604~hmac=02d5d5f9a8a3f9c15adcea107b45171bf6603b1579b15291bca7a49abb2e9370&w=826"
        },
    ]
    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            {
                                Benner.map((b, i) => {
                                    return (
                                        <div key={++i} className="col-12 col-md-6 col-lg-4 p-2">
                                            <div className="img">
                                                <img src={b.img} alt="" />
                                            </div>

                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benner