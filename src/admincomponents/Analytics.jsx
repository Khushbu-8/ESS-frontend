import { FiBarChart2 } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { MdFileCopy } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Card = ({ icon, title, amount }) => {
	const Icon = icon;

	return (
		<div className="flex items-center gap-5 bg-white dark:bg-dark-color sm:w-fit w-full 2xl:w-[248px] h-[97px] py-4 pl-5 pr-10 2xl:pr-0 rounded-2xl">
			<span className="text-2xl p-3 text-primary dark:text-white dark:bg-white/5 bg-primary/5 rounded-full">
				<Icon />
			</span>
			<div>
				<p className="text-textColor text-xs md:text-sm font-[500]">{title}</p>
				<h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-headingColor dark:text-white">
					{amount}
				</h2>
			</div>
		</div>
	);
};

const Analytics = () => {
	return (
		<div className="flex items-start gap-4 flex-wrap 2xl:flex-nowrap">
			<Card icon={FiBarChart2} title="Earnings" amount="$350.4" />
			<Card icon={FaDollarSign} title="Spend this month" amount="$642.39" />
			<div className="flex items-center gap-5 bg-white dark:bg-dark-color sm:w-fit w-full 2xl:w-[248px] h-[97px] py-4 pl-5 pr-10 2xl:pr-0 rounded-2xl">
				<div>
					<p className="text-textColor text-xs md:text-sm font-[500]">Sales</p>
					<h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-headingColor dark:text-white">
						$574.34
					</h2>
					<p className="text-textColor text-xs font-[500] mt-1">
						<span className="text-green-color font-semibold">+23%</span> since
						last month
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-5 bg-white dark:bg-dark-color sm:w-fit w-full 2xl:w-[248px] h-[97px] py-4 px-5 rounded-2xl">
				<div>
					<p className="text-textColor text-xs md:text-sm font-[500]">
						Your balance
					</p>
					<h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-headingColor dark:text-white">
						$1,000	
					</h2>
				</div>
				<div className="flex items-center gap-2 text-textColor dark:text-white">
					<img
						src="/assets/country.png"
						alt="country"
						className="object-contain object-center rounded-full"
					/>
					<IoIosArrowDown />
				</div>
			</div>
			<div className="flex items-center justify-start gap-5 bg-white dark:bg-dark-color sm:w-fit w-full 2xl:w-[248px] h-[97px] py-4 px-5 rounded-2xl">
				<img
					src="/assets/Icon.png"
					alt="icon"
					className="object-contain object-center rounded-full"
				/>
				<div>
					<p className="text-textColor text-xs md:text-sm font-[500]">
						New Tasks
					</p>
					<h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-headingColor dark:text-white">
						154
					</h2>
				</div>
			</div>
			<Card icon={MdFileCopy} title="Total Projects" amount="2935" />
		</div>
	);
};

export default Analytics;
