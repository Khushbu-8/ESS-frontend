import React from 'react'

const EditProfile = () => {
  return (
    <>
    <h1>Edit profile</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src=""
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md"
          />
        </div>
        {/* Name and Email */}
        <div className="text-center mt-4">
          <h1 className="text-xl font-semibold text-gray-800">user name</h1>
          <p className="text-gray-600"></p>
        </div>
        {/* Bio */}
        <div className="mt-4 text-gray-700 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius corporis architecto aperiam unde nesciunt modi perspiciatis eveniet optio. Reprehenderit asperiores perspiciatis ea illo in labore dignissimos soluta esse veniam.</p>
        </div>
        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default EditProfile
