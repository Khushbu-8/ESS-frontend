import { useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
import { BiSolidCheckCircle } from "react-icons/bi";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { weeklyData, monthlyData, todayData } from "../constants/Charts";
import DateDropDown from "./DateDropDown";

const TotalSpend = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [chartDate, setChartDate] = useState("This month");

	const getChartData = () => {
		if (chartDate === "This month") {
			return monthlyData;
		} else if (chartDate === "This week") {
			return weeklyData;
		} else if (chartDate === "Daily") {
			return todayData;
		}
	};

	return (
		<div className="w-full h-full bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<DateDropDown
					icon={FaRegCalendar}
					showMenu={showMenu}
					setShowMenu={setShowMenu}
					chartDate={chartDate}
					setChartDate={setChartDate}
				/>
				<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
					<IoStatsChart />
				</div>
			</div>

			<div className="flex items-start flex-col xl:flex-row">
				<div className="flex flex-col gap-5 w-full flex-[.5]">
					<div>
						<h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-semibold text-headingColor dark:text-white">
							$37.5K
						</h2>
						<div className="flex items-center gap-3 mt-1 whitespace-nowrap">
							<p className="text-textColor text-sm font-[500]">Total Spent</p>
							<p className="text-green-color flex items-center gap-1">
								<IoMdArrowDropup className="text-lg" />
								<span className="text-xs font-bold">+2.44%</span>
							</p>
						</div>
					</div>
					<p className="text-green-color flex items-center gap-1">
						<BiSolidCheckCircle className="text-lg mb-[2px]" />
						<span className="text-base font-bold">On track</span>
					</p>
				</div>

				<div className="w-full h-96 xl:h-72 flex-[2] text-xs text-textColor dark:text-white">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={getChartData()}>
							<XAxis dataKey="name" />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="spend"
								stroke="#4318FF"
								activeDot={{ r: 8 }}
							/>
							<Line type="monotone" dataKey="visit" stroke="#6AD2FF" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default TotalSpend;
