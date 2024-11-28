import React from 'react'
import Navebar from '../components/Navebar'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form"

const Contect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navebar/>
   <div className="max-w-md mx-auto mt-10 py-10">
      <form onSubmit={handleSubmit(onSubmit)}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
      <h2 className="text-2xl dark:text-black font-bold mb-6">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <span className='text-pink-500'>This field is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && <span className='text-pink-500'>This field is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
          {errors.message && <span className='text-pink-500'>This field is required</span>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contect