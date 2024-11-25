import React from 'react'
import list  from '../../public/list.json'
import Carts from './Carts';
import { Link } from 'react-router-dom';

const Course = () => {  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className='pt-32 item-center justify-center text-center' >
        <h1 className='text-2xl md:text-4xl'>Loremipsum dolor amet <span className='text-pink-500'>adipisicing :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ducimus minima molestias dolore adipisci quam mollitia tempore modi, cum neque libero blanditiis quidem consectetur accusantium earum? Temporibus corporis totam itaque!.</p>
    <Link to={'/'}>
    <button className='bg-pink-500 text-white px-4 py-3 rounded-md hover:bg-pink-700 duretion-300 mt-6'>Back</button>
    
    </Link>
       </div>
       <div className='my-12 grid grid-cols-1 md:grid-cols-4'>
       {
        list.map((item, index) => {
            return (  
                <Carts item={item} key={item.id} />
            )
        })
       }
            
       </div>
    </div>
    </>
  )
}

export default Course