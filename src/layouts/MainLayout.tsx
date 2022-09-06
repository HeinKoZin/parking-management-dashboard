import Header from "@components/Header";
import Sidebar from "@components/SideBar";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
	const navigate = useNavigate();

	const token = localStorage.getItem("token");

	if (!token) {
		navigate("/auth/login");
	}

	return (
		<div className="h-full">
			<Header />
			<div className="flex h-[calc(100%-64px)]">
				<div className="w-[10%] h-full bg-white border-r border-slate-300">
					<Sidebar />
				</div>
				<div className=" h-full py-10 px-40 w-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
