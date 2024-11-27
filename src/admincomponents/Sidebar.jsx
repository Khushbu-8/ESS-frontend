import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Logo from "../../public/ees-logo.png"
import { sidebarLinks } from "../constants/sidebar";
import { IoCloseCircleSharp } from "react-icons/io5";
import {RiLock2Line} from "react-icons/ri";

const Sidebar = ({ handleSidebar, setHandleSidebar }) => {
	const pathname = useLocation().pathname;
	const navigete = useNavigate();
	
	const logout = async(req,res) => {
		const response = await fetch(`https://ess-backend.vercel.app/logout`, {
			method: "POST",
			credentials: "include" // Include cookies
		});

		const data = await response.json();
		alert(data.message);
		navigete("/");
	}

	return (
		<div
			className={`fixed top-0 bg-white dark:bg-dark-color min-h-screen h-full overflow-hidden transition-all duration-500 z-50 ${
				handleSidebar
					? "-left-full xl:left-0  xl:w-72"
					: "left-0 w-72 shadow-2xl drop-shadow-md lg:shadow-none lg:drop-shadow-none"
			}`}
		>
			<div className="px-7 lg:px-10 py-7 border-b dark:border-white/10 relative">
						<img src={Logo} alt="" className="w-20 h-20" />
					
				<span
					onClick={() => setHandleSidebar(true)}
					className="block xl:hidden text-xl text-info dark:text-white p-2 rounded-md cursor-pointer hover:bg-info/5 dark:hover:bg-white/5 absolute top-6 right-3"
				>
					<IoCloseCircleSharp />
				</span>

				<span
					onClick={() => setHandleSidebar(!handleSidebar)}
					className={`absolute top-5 right-0 bg-primary/5 xl:block hidden dark:text-white dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-white/10 py-4 text-lg cursor-pointer xl:hidden ${
						!handleSidebar ? "rotate-0 rounded-l-lg" : "rotate-180 rounded-r-lg"
					}`}
				>
					<MdOutlineKeyboardArrowLeft />
				</span>
			</div>

			<ul className="flex flex-col gap-5 pl-8 py-7 relative">
				{sidebarLinks.map((link) => (
					<li key={link.path}>
						<Link
							to={link.path}
							className={`flex items-center dark:text-white dark:before:bg-secondary before:rounded-full capitalize transition-all duration-500 py-[.4rem] before:right-0 w-full ${
								handleSidebar
									? "gap-8 xl:gap-3 w-[13rem] before:absolute before:h-10 before:bg-info"
									: "gap-3 w-full relative before:absolute before:top-0 before:h-full before:bg-info"
							}
							 ${
									pathname === link.path
										? "before:w-1 text-green-500 font-[500] dark:text-white"
										: "hover:before:w-1 hover:text-green-500 text-textColor font-normal"
								} 
							`}
						>
							{pathname === link.path ? (
								<link.activeIcon className="text-2xl" />
							) : (
								<link.icon className="text-2xl" />
							)}
							<span className="font-semibold whitespace-nowrap">
								{link.name}
							</span>
						</Link>
					</li>
				))}
				<li>
						<Link className={` flex items-center dark:text-white dark:before:bg-secondary before:rounded-full capitalize transition-all duration-500  before:right-0 w-full hover:text-green-500 text-textColor font-normal"`}><RiLock2Line className="text-2xl " />
							<button onClick = { () => logout()} className="ms-3 font-semibold whitespace-nowrap ">
								Logout
							</button>
						</Link>
					</li>
			</ul>
		</div>
	);
};

export default Sidebar;
