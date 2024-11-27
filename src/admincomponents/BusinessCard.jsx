import { BsFire } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const BusinessCard = () => {
	return (
		<div className="w-full h-auto bg-white dark:bg-dark-color rounded-2xl flex flex-col justify-between">
			<div className="flex flex-col gap-8 p-6">
				<div className="flex items-center gap-3">
					<span className="p-3 text-xl rounded-xl text-[#EE5D50] bg-[#EE5D50]/10 dark:text-white dark:bg-white/5">
						<BsFire />
					</span>
					<div>
						<p className="capitalize text-xs xl:text-sm font-medium text-textColor">
							business desing
						</p>
						<h3 className="font-bold text-headingColor dark:text-white">
							New lession is available
						</h3>
					</div>
				</div>

				<h2 className="font-bold text-headingColor dark:text-white">
					What do you need to know to create better products?
				</h2>
			</div>

			<div className="w-full h-auto bg-[#FAFCFE] dark:bg-[#FAFCFE]/5 p-6 rounded-b-2xl flex flex-col gap-8">
				<div className="flex items-center gap-5">
					<p className="flex items-center gap-1">
						<span className="text-green-color text-xl">
							<IoMdStopwatch />
						</span>
						<span className="text-sm font-medium text-headingColor dark:text-white">
							85 mins
						</span>
					</p>
					<p className="flex items-center gap-1">
						<span className="text-xl text-[#EE5D50]">
							<MdOutlineSlowMotionVideo />
						</span>
						<span className="text-sm font-medium text-headingColor dark:text-white">
							Video format
						</span>
					</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img
							src="/assets/user.png"
							alt="user"
							className="rounded-full w-9 border-2 border-white dark:border-darkBg aspect-square cursor-pointer object-cover object-top"
						/>
						<img
							src="/assets/user.png"
							alt="user"
							className="rounded-full w-9 border-2 border-white dark:border-darkBg dark:border-transparent aspect-square cursor-pointer object-cover object-top -ml-4"
						/>
						<img
							src="/assets/user.png"
							alt="user"
							className="rounded-full w-9 border-2 border-white dark:border-darkBg dark:border-transparent aspect-square cursor-pointer object-cover object-top -ml-4"
						/>
						<p className="bg-[#E0E5F2] dark:bg-darkBg dark:text-white dark:border-darkBg rounded-full border-2 border-white w-9 aspect-square flex items-center justify-center text-xs font-semibold -ml-4">
							18+
						</p>
					</div>
					<div>
						<button
							type="button"
							className="bg-[#4318FF] hover:bg-[#4318FF]/90 text-white dark:bg-secondary dark:hover:bg-secondary/90 capitalize py-2.5 px-5 text-sm font-medium rounded-xl"
						>
							get started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessCard;
