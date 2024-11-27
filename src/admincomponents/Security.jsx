import { IoFingerPrintSharp } from "react-icons/io5";

const Security = () => {
	return (
		<div className="w-full h-auto bg-white dark:bg-dark-color rounded-2xl flex flex-col gap-5 p-6">
			<span className="text-6xl text-primary dark:text-white">
				<IoFingerPrintSharp />
			</span>
			<h2 className="text-headingColor dark:text-white font-semibold text-xl">
				Control card security <br /> in-app with a tap
			</h2>
			<p className="text-textColor text-xs font-medium">
				Discover our cards benefits, with one tap.
			</p>
			<button
				type="button"
				className="bg-[#4318FF] hover:bg-[#4318FF]/90 text-white dark:bg-secondary dark:hover:bg-secondary/90 capitalize py-2.5 px-5 text-sm font-medium rounded-xl mt-auto"
			>
				Cards
			</button>
		</div>
	);
};

export default Security;
