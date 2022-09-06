import { AllUserList, useAllUser } from "@apis/userAPI/useAllUsers";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
	const token = localStorage.getItem("token");
	const [users, setUsers] = useState<AllUserList["data"]>();

	if (!token) {
		return <Navigate to={"/login"}></Navigate>;
	}

	const { data } = useAllUser(token);

	return (
		<div className="grid grid-cols-2 gap-3">
			<div className="bg-white p-6 rounded-xl shadow-lg">
				<h2 className="text-lg font-bold font-quicksand ">Total users</h2>
				<br />
				<h1 className="text-xl font-medium font-quicksand">
					{data?.data.length}
				</h1>
			</div>

			<div className="bg-white p-6 rounded-xl shadow-lg">
				<h2 className="text-lg font-bold font-quicksand ">Total admins</h2>
				<br />
				<h1 className="text-xl font-medium font-quicksand">
					{data?.data.length}
				</h1>
			</div>
		</div>
	);
}

export default Dashboard;
