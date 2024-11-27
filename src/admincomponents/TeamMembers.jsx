import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { team } from "../constants/Team";
import AddMember from "./AddMember";

const TeamMembers = () => {
	const [addMember, setAddMember] = useState(false);

	const handleAddMember = (newMember) => {
		// Update the team with the new member
		team.push(newMember);
	};

	return (
		<div className="w-full h-auto pb-6 bg-white dark:bg-dark-color rounded-2xl flex flex-col gap-3">
			<div className="flex items-center justify-between p-6">
				<h3 className="font-bold text-headingColor dark:text-white">
					Team Members
				</h3>
				<button
					type="button"
					onClick={() => setAddMember(true)}
					className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-[22px] p-[6px] rounded-lg"
				>
					<IoIosAddCircle />
				</button>
			</div>

			<div className="overflow-y-auto team px-6">
				<div className="flex flex-col gap-5 max-h-52 h-full last:mb-5">
					{team.map((item) => (
						<div
							key={item.id}
							className="flex bg-white dark:bg-white/5 items-center gap-3 2xl:gap-5 rounded-2xl 2xl:rounded-3xl p-3 2xl:p-5 shadow-xl"
						>
							<img
								src={
									item.image && item.image.startsWith("https://")
										? item.image
										: "/assets/no-user.jpg"
								}
								alt="user"
								className="rounded-full w-[46px] aspect-square cursor-pointer object-cover object-top"
							/>

							<div className="capitalize">
								<h2 className="text-headingColor text-sm 2xl:text-base font-semibold dark:text-white">
									{item.name}
								</h2>
								<p className="text-xs font-medium text-textColor">
									{item.role}
								</p>
							</div>
							<HiOutlineDotsVertical className="text-textColor ml-auto cursor-pointer text-lg 2xl:text-xl" />
						</div>
					))}
				</div>
			</div>

			{AddMember && (
				<AddMember
					addMember={addMember}
					setAddMember={setAddMember}
					onAddMember={handleAddMember}
				/>
			)}
		</div>
	);
};

export default TeamMembers;
