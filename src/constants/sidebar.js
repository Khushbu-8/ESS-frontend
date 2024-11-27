import { MdHome, MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineUser, HiUser } from "react-icons/hi2";
import {
	RiDashboardFill,
	RiLock2Line,
	RiLock2Fill,
	RiDashboardLine,
} from "react-icons/ri";

export const sidebarLinks = [
	{
		name: "dashboard",
		path: "/dashboard",
		icon: HiOutlineHome,
		activeIcon: MdHome,
	},
	{
		name: "NFT marketplace",
		path: "/dashboard/nft-marketplace",
		icon: MdOutlineShoppingCart,
		activeIcon: IoMdCart,
	},
	{
		name: "users",
		path: "/dashboard/users",
		icon: FiBarChart2,
		activeIcon: FiBarChart2,
	},
	{
		name: "createUser",
		path: "/dashboard/createUser",
		icon: RiDashboardLine,
		activeIcon: RiDashboardFill,
	},
	
	{
		name: "profile",
		path: "/dashboard/profile",
		icon: HiOutlineUser,
		activeIcon: HiUser,
	},
	
	// {
	// 	name: "login",
	// 	path: "/login",
	// 	icon: RiLock2Line,
	// 	activeIcon: RiLock2Fill,
	// },
];
