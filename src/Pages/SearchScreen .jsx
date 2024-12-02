import React, { useEffect, useState } from 'react'
import Navebar from '../components/Navebar'

const SearchScreen  = () => {
    const [filterrecord, setFilterRecord] = useState([]);
    
    const [search, setSearch] = useState("");
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
        { id: 11, name: "BEAUTY PARLOUR" },
        { id: 12, name: "BIKE SERVICE" },
        { id: 13, name: "BROKER" },
        { id: 14, name: "BUSINESS CONSULTANT" },
        { id: 15, name: "BICYCLE" },
        { id: 16, name: "CAFE" },
        { id: 17, name: "CAR DECORATOR" },
      ];

    let profile = [{
        id:1,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        category : "A.C. SERVICE"

    } ,
    {
        id:2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "9876543210",
        address: "456 Elm St, Anytown, USA",
        category : "AUTO RICKSHAW"
        },
        {
            id:3,
            name: "John Doe",
            email: "john@example.com",
            phone: "1234567890",
            address: "123 Main St, Anytown, USA",
            category : "BAGGI (HORSE CART)"
            },
 ]

 const FilterServies = (cat) =>{
    let filterSevises = [...profile]
    filterSevises = filterSevises.filter(val => val.category === cat)
    setFilterRecord(filterSevises)
 }
 useEffect(()=>{
    let filter = [...profile];
    if(search.trim()){
        filter = filter.filter(item => item.category.toLowerCase().includes(search.toLowerCase()));
        }
        setFilterRecord(filter);
 },[search])

 
 useEffect(()=>{
    FilterServies();
 },[])
  return (
    <>
    <Navebar/>
    
    <div className='max-w-sm  mt-20 p-6'>
        <h1 className='py-3'>Serch for Serviesis</h1>
    <div className="form-control ">
      <input type="text" placeholder="Search"  onChange={(e) => setSearch(e.target.value)} value={search}  className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>
<div className='pb-4 pl-5'>
    {
        categories.map((cat,i) =>{
            return(
                <button onClick={() => FilterServies(cat.name)} className="btn btn-active bg-primary text-white hover:bg-red-700 border-0 rounded-sm m-1">{cat.name}</button>
            )
        })
    }

{/* <button className="btn btn-active rounded-sm mx-1">Ac servise</button> */}

</div>

    <div className='card card-compact bg-base-100  shadow-xl'>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Bussiness</th>
        <th>profile</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    {filterrecord.length > 0 ? (
                filterrecord.map((p, i) => (
                  <tr key={p.id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://via.placeholder.com/150"
                              alt="User Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{p.name}</div>
                          <div className="text-sm opacity-50">{p.email}</div>
                          <div className="text-sm opacity-50">{p.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td>{p.category}</td>
                    <td>
                      <button className="btn">View Profile</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No records found. Please select a category or search.
                  </td>
                </tr>
              )}
     

    </tbody>
    {/* foot */}
   
  </table>
</div>
    </div>
    </>
  )
}

export default SearchScreen 
