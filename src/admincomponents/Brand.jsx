import { FaRegClock } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const Brand = () => {
	return (
		<div className="w-full h-auto bg-white dark:bg-dark-color rounded-2xl flex flex-col gap-8 p-6">
			<div className="relative">
				<span className="text-white bg-[#708489] p-2 absolute top-2 right-2 rounded-lg">
					<FaRegClock />
				</span>
				<img
					src="/assets/brand/brand-ad.png"
					alt="user"
					className="rounded-xl w-full h-auto cursor-pointer object-cotain object-top"
				/>
				<img
					src="/assets/brand/brand-logo.png"
					alt="user"
					className="rounded-xl w-12 2xl:w-[60px] aspect-square cursor-pointer object-cover object-top absolute -bottom-6 left-2 z-[1]"
				/>
				<div className="w-full h-full bg-slate-50 absolute top-0 left-0 rounded-lg bg-gradient-to-t from-[#111c449c] to-transparent bg-opacity-10" />
			</div>
			<div>
				<h2 className="capitalize text-headingColor dark:text-white font-semibold text-xl">
					startbucks
				</h2>
				<p className="flex items-center gap-2 text-textColor mt-1">
					<span className="text-lg">
						<MdFastfood />
					</span>
					<span className="text-sm font-medium">10% cashback & off</span>
				</p>
			</div>
		</div>
	);
};

export default Brand;
