import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";

import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/purple.css";
import "react-multi-date-picker/styles/colors/green.css";

import { useTheme } from "../context/ThemeProvider";

const DatePicker = () => {
	const [values, setValues] = useState([new DateObject()]);
	const { theme } = useTheme();

	return (
		<div className="md:w-fit h-auto bg-white dark:bg-dark-color p-6 rounded-2xl flex items-center justify-center">
			{theme === "light" ? (
				<Calendar
					value={values}
					onChange={setValues}
					range
					rangeHover
					className={`md:w-full bg-transparent dark:bg-transparent shadow-none dark:shadow-none green`}
				/>
			) : (
				<Calendar
					value={values}
					onChange={setValues}
					range
					rangeHover
					className={`md:w-full bg-transparent dark:bg-transparent shadow-none dark:shadow-none bg-dark purple`}
				/>
			)}
		</div>
	);
};

export default DatePicker;
