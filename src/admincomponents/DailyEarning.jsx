import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { IoMdArrowDropdown } from "react-icons/io";

import {
	monthlyPieData,
	weeklyPieData,
	dailyPieData,
} from "../constants/Charts";
import DateDropDown from "./DateDropDown";

const DailyEarning = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [chartDate, setChartDate] = useState("This month");

	const getChartData = () => {
		if (chartDate === "This month") {
			return monthlyPieData;
		} else if (chartDate === "This week") {
			return weeklyPieData;
		} else if (chartDate === "Daily") {
			return dailyPieData;
		}
	};

	const COLORS = ["#4318FF", "#6AD2FF", "#e6edf9"];

	return (
		<div className="w-full h-auto bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col justify-between gap-8">
			<div className="flex items-center justify-between">
				<h2 className="capitalize text-sm 2xl:text-base font-bold text-headingColor dark:text-white">
					Daily Earning
				</h2>
				<DateDropDown
					icon={IoMdArrowDropdown}
					showMenu={showMenu}
					setShowMenu={setShowMenu}
					chartDate={chartDate}
					setChartDate={setChartDate}
					className="p-0 bg-transparent gap-0 dark:bg-transparent rounded-none flex-row-reverse"
					menuClasses="right-0"
				/>
			</div>

			<div className="w-full h-40 text-xs text-textColor dark:text-white">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={400}>
						<Pie
							data={getChartData()}
							cx="50%"
							cy="50%"
							labelLine={false}
							outerRadius={80}
							fill="#e6edf9"
							dataKey="value"
						>
							{monthlyPieData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>

			<div className="w-full relative rounded-2xl py-5 px-8 2xl:px-10 2xl:py-8 shadow-xl flex items-center justify-between gap-5">
				<div className="relative capitalize before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:-left-4 before:top-2">
					<p className="text-textColor text-sm 2xl:text-base">Your files</p>
					<h2 className="text-headingColor dark:text-white font-bold text-xl 2xl:text-2xl">
						63%
					</h2>
				</div>
				<span className="absolute w-[.5px] h-[70%] bg-black/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
				<div className="relative capitalize before:absolute before:w-2 before:h-2 before:bg-[#6AD2FF] before:rounded-full before:-left-4 before:top-2">
					<p className="text-textColor text-sm 2xl:text-base">system</p>
					<h2 className="text-headingColor dark:text-white font-bold text-xl 2xl:text-2xl">
						25%
					</h2>
				</div>
			</div>
		</div>
	);
};

export default DailyEarning;
