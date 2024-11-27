import { BsThreeDots } from "react-icons/bs";

import { checkTable } from "../constants/TablesData";

const CheckTable = () => {
	return (
		<div className="w-full h-full overflow-auto scrollbar bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg capitalize md:text-xl xl:text-2xl font-bold text-headingColor dark:text-white">
						Check Table
					</h2>
				</div>
				<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
					<BsThreeDots />
				</div>
			</div>

			<table className="w-full text-left overflow-auto whitespace-nowrap">
				<thead className="uppercase text-sm font-medium text-textColor">
					<tr>
						<th>name</th>
						<th className="pl-10 md:pl-3">progress</th>
						<th className="pl-10 md:pl-3">quantity</th>
						<th className="pl-10 md:pl-3">date</th>
					</tr>
				</thead>
				<tbody>
					{checkTable.map((item) => (
						<tr
							key={item.name}
							className="text-sm font-bold text-headingColor dark:text-white capitalize"
						>
							<td className="flex items-center mt-5">
								<input
									type="checkbox"
									name="name"
									id="name"
									className="cursor-pointer w-4 2xl:w-5 aspect-square accent-primary mr-4"
								/>
								<span>{item.name}</span>
							</td>

							<td className="pt-5 pl-10 md:pl-3">{item.progress}%</td>
							<td className="pt-5 pl-10 md:pl-3">{item.quantity}</td>
							<td className="pt-5 pl-10 md:pl-3">{item.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CheckTable;
