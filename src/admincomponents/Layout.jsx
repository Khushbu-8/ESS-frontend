import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { ThemeProvider } from "../context/ThemeProvider";

const Layout = () => {
	const [handleSidebar, setHandleSidebar] = useState(false);

	return (
		<ThemeProvider defaultTheme="system" storageKey="theme">
			<div>
				<Sidebar
					handleSidebar={handleSidebar}
					setHandleSidebar={setHandleSidebar}
				/>
				<div
					className={`bg-lightBg dark:bg-darkBg pr-3 min-h-screen transition-all duration-500 ${
						handleSidebar
							? "pl-3 xl:pl-[19.5rem]"
							: "pl-3 xl:pl-[19.5rem]"
					}`}
				>
					<Navbar
						handleSidebar={handleSidebar}
						setHandleSidebar={setHandleSidebar}
					/>
					<div onClick={() => setHandleSidebar(true)}>
						<Outlet />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default Layout;
