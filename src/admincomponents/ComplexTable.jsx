import { BsThreeDots } from "react-icons/bs";
import {
	IoIosCheckmarkCircle,
	IoIosCloseCircle,
	IoMdInformationCircle,
} from "react-icons/io";

import { complexTable } from "../constants/TablesData";

const ComplexTable = () => {
	return (
		<div className="w-full h-full overflow-auto scrollbar whitespace-nowrap bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg capitalize md:text-xl xl:text-2xl font-bold text-headingColor dark:text-white">
						Complex Table
					</h2>
				</div>
				<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
					<BsThreeDots />
				</div>
			</div>

			<table className="w-full text-left overflow-auto">
				<thead className="uppercase text-sm font-medium text-textColor">
					<tr>
						<th className="pb-2">name</th>
						<th className="pb-2 pl-10 md:pl-0">status</th>
						<th className="pb-2 pl-10 md:pl-0">date</th>
						<th className="pb-2 pl-10 md:pl-0">progress</th>
					</tr>
				</thead>
				<tbody className="border-t">
					{complexTable.map((item) => (
						<tr
							key={item.name}
							className="text-sm font-bold text-headingColor dark:text-white capitalize"
						>
							<td className="flex items-center mt-5">{item.name}</td>

							<td className="pt-5 pl-10 md:pl-0 capitalize">
								<span className="flex items-center gap-1">
									{item.status === "approved" && (
										<IoIosCheckmarkCircle className="text-green-color text-lg" />
									)}
									{item.status === "disabled" && (
										<IoIosCloseCircle className="text-red-500 text-lg" />
									)}
									{item.status === "error" && (
										<IoMdInformationCircle className="text-yellow-500 text-lg" />
									)}
									{item.status}
								</span>
							</td>
							<td className="pt-5 pl-10 md:pl-0">{item.date}</td>
							<td className="pt-5 pl-10 md:pl-0 relative">
								<div
									className={`w-40 md:w-full pl-10 bg-lightBg h-2 rounded-full overflow-hidden`}
								/>
								<div
									style={{ width: `${item.progress}%` }}
									className="absolute left-10 md:left-0 h-2 bottom-[.465rem] bg-primary rounded-full max-w-[10rem] md:max-w-full"
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ComplexTable;
