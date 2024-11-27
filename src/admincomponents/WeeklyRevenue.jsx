import { IoStatsChart } from "react-icons/io5";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { weeklyRevenue } from "../constants/Charts";

const WeeklyRevenue = () => {
	return (
		<div className="w-full h-auto bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg capitalize md:text-xl xl:text-2xl font-bold text-headingColor dark:text-white">
						weekly revenue
					</h2>
				</div>
				<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
					<IoStatsChart />
				</div>
			</div>

			<div className="w-full h-full xl:h-[18.5rem] text-xs text-textColor dark:text-white">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={weeklyRevenue}>
						<XAxis dataKey="name" />
						<Tooltip />
						<Bar dataKey="visit" stackId="a" fill="#4318FF" />
						<Bar dataKey="spend" stackId="a" fill="#6AD2FF" />
						<Bar dataKey="earning" stackId="a" fill="#E6EDF9" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default WeeklyRevenue;
