import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const AddMember = ({ addMember, setAddMember, onAddMember }) => {
	const [newMemberData, setNewMemberData] = useState({
		image: "",
		name: "",
		role: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewMemberData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleAddMember = () => {
		const newMember = {
			id: Math.floor(Math.random() * 1000),
			...newMemberData,
		};

		onAddMember(newMember);

		setAddMember(false);

		setNewMemberData({
			image: "",
			name: "",
			role: "",
		});
	};

	const isFormValid =
		newMemberData.image.trim() !== "" &&
		newMemberData.name.trim() !== "" &&
		newMemberData.role.trim() !== "";

	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center transition-all duration-500 ${
				addMember ? "top-0 opacity-100 z-[100]" : "-top-full opacity-0 -z-[100]"
			}`}
		>
			<form
				action="#"
				className="w-[95%] sm:w-96 2xl:w-1/3 p-6 rounded-xl bg-white dark:bg-dark-color"
			>
				<div className="flex items-start justify-between">
					<h2 className="text-headingColor text-lg font-semibold dark:text-white mb-5">
						Add New Member
					</h2>
					<button
						type="button"
						onClick={() => setAddMember(false)}
						className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-[22px] p-[6px] rounded-lg"
					>
						<IoIosCloseCircle />
					</button>
				</div>

				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-1">
						<label
							htmlFor="image"
							className="text-sm font-medium text-headingColor dark:text-white cursor-pointer"
						>
							Image Url
						</label>
						<input
							type="text"
							name="image"
							id="image"
							value={newMemberData.image}
							onChange={handleChange}
							placeholder="Enter Image URL"
							className="rounded-lg w-full bg-lightBg dark:bg-darkBg dark:text-white px-4 py-3.5 2xl:py-4 outline-none border focus-within:border-primary border-transparent text-sm 2xl:text-base"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="name"
							className="text-sm font-medium text-headingColor dark:text-white cursor-pointer"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={newMemberData.name}
							onChange={handleChange}
							placeholder="Enter Your Name"
							className="rounded-lg w-full bg-lightBg dark:bg-darkBg dark:text-white px-4 py-3.5 2xl:py-4 outline-none border focus-within:border-primary border-transparent text-sm 2xl:text-base"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="role"
							className="text-sm font-medium text-headingColor dark:text-white cursor-pointer"
						>
							Role
						</label>
						<input
							type="text"
							name="role"
							id="role"
							value={newMemberData.role}
							onChange={handleChange}
							placeholder="Enter Your Role"
							className="rounded-lg w-full bg-lightBg dark:bg-darkBg dark:text-white px-4 py-3.5 2xl:py-4 outline-none border focus-within:border-primary border-transparent text-sm 2xl:text-base"
						/>
					</div>
					<button
						type="button"
						onClick={handleAddMember}
						className={`bg-[#4318FF] hover:bg-[#4318FF]/90 dark:bg-secondary dark:hover:bg-secondary/90 capitalize px-4 py-3 2xl:py-3.5 font-medium rounded-xl mt-3 ${
							isFormValid
								? "text-white"
								: "bg-primary/50 hover:bg-primary/50 cursor-not-allowed dark:bg-white/5 dark:hover:bg-white/5 text-zinc-200/80 dark:text-zinc-300/50"
						}`}
						disabled={!isFormValid}
					>
						Add Member
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddMember;
