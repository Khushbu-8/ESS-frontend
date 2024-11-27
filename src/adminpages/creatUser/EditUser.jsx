import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [businessCategory, setBusinessCategory] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
  const navigete = useNavigate()
  let categories = [
    "A.C. SERVICE",
    "ADVOCATE",
    "ALUMINIUM WORKER",
    "AUTO RICKSHAW",
    "AUTO MOBILE & SALES",
    "BABY SITTING",
    "BAGGI (HORSE CART)",
    "BANK SERVICE",
    "BANQUET HALL",
    "BATTERY SERVICE",
    "BEAUTY PARLOUR",
    "BIKE SERVICE",
    "BROKER",
    "BUSINESS CONSULTANT",
    "BICYCLE",
    "CAFE",
    "CAR DECORATOR",
    "CAR SERVICE",
    "CAR WASHING",
    "CAR WIRING",
    "CARE TAKER",
    "CARPENTER",
    "CATERING",
    "CCTV.CAMERA",
    "CHAIR REPAIRING",
    "CHARTERED ACCOUNTAT",
    "CHILDREN WEAR",
    "CLASSES",
    "COMPUTER CLASSES",
    "COMPUTER HARDWARE",
    "COMPUTER SOFTWARE",
    "COSMETIC STORE",
    "COURIER SERVICE",
    "DAIRY PRODUCT",
    "DANCE CLASSES",
    "DESIGNER / EDITOR",
    "DHOLI",
    "DIAMOND BUSINESS",
    "DIGITAL MARKETING",
    "DJ SOUND",
    "DOCTOR",
    "E - COMMERCE",
    "EDUCATION",
    "ELECTRICIAN",
    "ELECTRONIC PRODUCT",
    "EMPLOYEE",
    "ENGINEER",
    "EVENT MANAGEMENT",
    "WELDING",
    "FARMER",
    "FASHION DESIGNER",
    "FAST FOOD",
    "FINANCIAL",
    "FLEX BOARD HOARDING",
    "FLOWER DECORATION",
    "FREELANCER",
    "FURNITURE",
    "GAS CHULA SERVICE",
    "GENERATOR SERVICE",
    "GEYSER SERVICE",
    "GLASS WORK",
    "GOVT. PUBLIC SERVICE",
    "GOVT. EMERGENCY SERVICE",
    "GRUH UDHYOG",
    "GYM",
    "HEALTH CARE",
    "HOME CLEANING",
    "HOSPITAL",
    "HOUSE WIFE",
    "IMITATION JEWELLERY",
    "INDUSTRIAL INSTRUMENT",
    "INSURANCE",
    "INTERIOR DESIGNER",
    "INTERNET DEPARTMENT",
    "INVERTER SERVICE",
    "JOB PLACEMENT",
    "JUICE CENTER",
    "LABOUR",
    "LAUNDRY",
    "LIFT SERVICE",
    "LIGHTING",
    "MAID",
    "MANDAP SERVICE",
    "MANUFACTURING",
    "MARKETING",
    "MARRIAGE BUREAU",
    "MEDICAL STORE",
    "MEHNDI ARTIST",
    "MEN'S WEAR",
    "MOBILE & ACCESSORIES",
    "MOTOR SERVICE",
    "MOVERS & PACKER",
    "NURSERY",
    "ORCHESTRA",
    "OTHER",
    "OVEN SERVICE",
    "PAINTER",
    "PANDIT",
    "PASSPORT AGENT",
    "PEST CONTROL",
    "PETCARE SERVICE",
    "PHOTOGRAPHY",
    "PHYSIOTHERAPIST",
    "PLUMBER",
    "PRINTING PRESS",
    "R.O. SERVICE",
    "REAL - ESTATE",
    "REFRESHMENT",
    "RESTAURANTS",
    "RETIRED",
    "RIDES",
    "RTO AGENT",
    "REFRIGERATOR SERVICE",
    "SCRAP ( BHANGAR )",
    "SECURITY SERVICE",
    "SHOEMAKER ( MOCHI )",
    "SHOP",
    "SHUTTER REPAIR",
    "SOCIAL WORKER",
    "SOFA CLEANING",
    "SOLAR PANEL",
    "SOUND SYSTEM REPAIRING",
    "SPOKEN ENGLISH CLASSES",
    "SPORTS",
    "STATIONERY",
    "STOCK MARKET",
    "STUDENT",
    "STUDY CLASSES",
    "SALON",
    "TAXI",
    "TEA CENTER",
    "TELECOM DEPARTMENT",
    "TEXTILE",
    "TIFFIN SERVICE",
    "TOUR & TRAVELERS",
    "TAILOR",
    "TOWING",
    "TRADERS",
    "TRANSPORT",
    "TRAVEL AGENT",
    "TUITION CLASS",
    "T.V. SERVICE",
    "TWO WHEELERS WIRING",
    "TYRE PUNCTURE FIXING",
    "VEGETABLES & FRUITS",
    "VETER INARY DOCTOR",
    "VISA CONSULTANCY & GUIDANCE",
    "WASHING MACHINE SERVICE",
    "WATER SUPPLIER",
    "WEALTH MANAGEMENT",
    "WOMEN WEAR",
    "XEROX",
    "YOGA CLASSES"
  ]
  const toggleSelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  //  const backend_API = "http://localhost:4000"
  const backend_API = "https://ess-backend.vercel.app"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBusiness = { name, email, password, contact, address, selectedCategories, businessName, businessAddress };

    try {
      const record = await fetch(`${backend_API}/admin/updateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: location?.state?._id,
          name: name,
          email: email,
          password: password,
          contact: contact,
          address: address,
          businessCategory: selectedCategories,
          businessName: businessName,
          businessAddress: businessAddress

        })
      })
      await record.json();
      // console.log(data);
      alert('User Update Successfully');
      navigete('/dashboard/users')

    } catch (error) {
      console.log(error);
      return false;
    }

  };
  useEffect(() => {
    setName(location?.state?.name)
    setEmail(location?.state?.email)
    setPassword(location?.state?.password)
    setConfirmPassword(location.state?.confirmPassword)
    setContact(location?.state?.contact)
    setAddress(location?.state?.address)
    setSelectedCategories(location?.state?.selectedCategories || []),
      setBusinessName(location?.state?.businessName),
      setBusinessAddress(location?.state?.businessAddress)
  }, [location?.state])

  return (
    <div className="p-4">
      <h1 className="text-2xl  dark:text-white font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit} method='post' className="space-y-4  dark:text-white">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Business Name</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="w-full mt-10">
        <label className="block text-sm font-medium">
            Select Business Categories:
          </label>
          <div className="mt-2">
            <div className="border border-gray-300 rounded-md p-2 bg-white">
              {selectedCategories.length > 0 ? (
                selectedCategories.map((category, i) => (
                  <span
                    key={++i}
                    className="inline-block bg-green-500 text-white px-3 py-1 text-sm rounded-full mr-2 mb-2"
                  >
                    {category}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">Select categories</span>
              )}
            </div>
            <ul className=" z-10 border border-gray-300 bg-white w-full mt-2 rounded-md shadow-lg max-h-40 overflow-y-auto">
              {categories.map((category, i) => (
                <li
                  key={++i}
                  className={`cursor-pointer px-4 py-2 hover:bg-green-200 ${selectedCategories.includes(category) ? "bg-green-200" : ""
                    }`}
                  onClick={() => toggleSelection(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Business Address</label>
          <input
            type="text"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font -bold py-2 rounded-md hover:bg-green-600"
        >
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUser;