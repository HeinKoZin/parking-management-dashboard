import { getMe, UserInformation } from "@apis/auth/me";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token") ?? undefined;

	if (!token) {
		navigate("/");
	}

	const [user, setUser] = useState<UserInformation["data"]>();

	const getUser = async () => {
		const me = await getMe(token);
		if (me) {
			setUser(me.data);
		}
	};

	const handleLogout = () => {
		navigate("/login");
		localStorage.removeItem("token");
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="navbar bg-blue-600 text-white">
			<div className="flex-1 px-2 lg:flex-none">
				<a className="text-lg font-bold">User Management</a>
			</div>
			<div className="flex justify-end flex-1 px-2">
				<div className="flex items-stretch">
					<a className="btn btn-ghost rounded-btn">{}</a>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost rounded-btn ">
							{user?.user.name}
						</label>
						<ul
							tabIndex={0}
							className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-slate-600"
						>
							<li>
								<a>Profile</a>
							</li>
							<li onClick={() => handleLogout()}>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
