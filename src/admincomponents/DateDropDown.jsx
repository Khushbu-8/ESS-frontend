const DateDropDown = ({
	icon,
	showMenu,
	setShowMenu,
	chartDate,
	setChartDate,
	className,
	menuClasses,
}) => {
	const Icon = icon;

	return (
		<div
			onClick={() => setShowMenu(!showMenu)}
			className={`flex relative cursor-pointer items-center gap-2 p-3 text-textColor bg-lightBg dark:bg-white/5 dark:text-white w-fit rounded-lg select-none ${className}`}
		>
			<Icon />
			<span className="text-sm font-[500]">{chartDate}</span>

			<div
				className={`absolute bg-white shadow-md dark:bg-darkBg top-[120%] w-52 rounded-lg overflow-hidden transition-all duration-500 z-20 ${menuClasses} ${
					showMenu ? "h-[8.5rem]" : "h-0"
				}`}
			>
				<ul className="m-2">
					<li
						onClick={() => setChartDate("This month")}
						className="p-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-md"
					>
						This month
					</li>
					<li
						onClick={() => setChartDate("This week")}
						className="p-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-md"
					>
						This week
					</li>
					<li
						onClick={() => setChartDate("Daily")}
						className="p-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-md"
					>
						Daily
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DateDropDown;
