import { IoMdArrowDropup } from "react-icons/io";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { weeklyData } from "../constants/Charts";

const DailyTraffic = () => {
	return (
		<div className="w-full h-full bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-start justify-between">
				<div>
					<p className="capitalize text-textColor text-sm font-medium">
						daily traffic
					</p>
					<h2 className="text-xl capitalize md:text-2xl xl:text-3xl font-bold text-headingColor dark:text-white">
						<span>2.579</span>
						<span className="capitalize text-textColor text-sm font-medium">
							visitors
						</span>
					</h2>
				</div>
				<p className="text-green-color flex items-center gap-1">
					<IoMdArrowDropup className="text-lg" />
					<span className="text-xs font-bold">+2.45%</span>
				</p>
			</div>

			<div className="w-full h-72 text-xs text-textColor dark:text-white">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={weeklyData}>
						<XAxis dataKey="name" />
						<Tooltip />
						<Bar dataKey="spend" stackId="a" fill="#4318FF" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default DailyTraffic;
