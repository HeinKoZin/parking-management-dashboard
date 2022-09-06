import { AllUserList, useAllUser } from "@apis/userAPI/useAllUsers";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import moment from "moment";

function User() {
	const token = localStorage.getItem("token");
	const [users, setUsers] = useState<AllUserList["data"]>();

	if (!token) {
		return <Navigate to={"/login"}></Navigate>;
	}

	const { data } = useAllUser(token);

	useEffect(() => {
		if (data) {
			setUsers(data.data);
		}
	}, [data]);

	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra w-full">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Created At</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => {
						return (
							<tr>
								<th>{user.id}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td>
									{moment(user.createdAt).startOf("millisecond").fromNow()}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default User;
