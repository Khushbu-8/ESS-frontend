import Analytics from "../../admincomponents/Analytics";
import CheckTable from "../../admincomponents/CheckTable";
import DailyTraffic from "../../admincomponents/DailyTraffic";
import DailyEarning from "../../admincomponents/DailyEarning";
import TotalSpend from "../../admincomponents/TotalSpend";
import WeeklyRevenue from "../../admincomponents/WeeklyRevenue";
import ComplexTable from "../../admincomponents/ComplexTable";
import Tasks from "../../admincomponents/Tasks";
import DatePicker from "../../admincomponents/DatePicker";
import BusinessCard from "../../admincomponents/BusinessCard";
import TeamMembers from "../../admincomponents/TeamMembers";
import Security from "../../admincomponents/Security";
import Brand from "../../admincomponents/Brand";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-5 pb-8">
			<Analytics />
			<div className="flex justify-between xl:items-start flex-col md:flex-row gap-5">
				<TotalSpend />
				<WeeklyRevenue />
			</div>

			<div className="flex justify-between flex-col 2xl:flex-row gap-5">
				<div className="w-full">
					<CheckTable />
				</div>

				<div className="w-full flex flex-col sm:flex-row gap-5">
					<DailyTraffic />
					<DailyEarning />
				</div>
			</div>
			<div className="flex justify-between flex-col 2xl:flex-row gap-5">
				<div className="w-full">
					<ComplexTable />
				</div>

				<div className="w-full flex flex-col md:flex-row gap-5">
					<Tasks />
					<DatePicker />
				</div>
			</div>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
				<BusinessCard />
				<TeamMembers />
				<Security />
				<Brand />
			</div>
		</div>
	);
};

export default Dashboard;
