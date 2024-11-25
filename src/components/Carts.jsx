import React from 'react'

function Carts({ item }) {

  return (
    <>
      <div className="card bg-base-100 w-93 shadow-xl m-3 hover:scale-105 duration dark:bg-slate-900 dark:text-white dark:border ">
        <figure>
          <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between item-center">
            <div className="badge badge-outline">${item.price}</div>
            <div className=" rounded-full py-2 px-3 text-sm border-[2px] hover:bg-pink-500 hover:text-white" >Shop now</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carts
