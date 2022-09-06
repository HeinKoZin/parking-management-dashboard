import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiUser, BiEdit } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AllUserList, useAllUser } from "@apis/userAPI/useAllUsers";

function UserListPage() {
	const token = localStorage.getItem("token") ?? undefined;
	const { data: users, error } = useAllUser(token);
	const [row, setRows] = React.useState<AllUserList["data"]>();

	useEffect(() => {
		if (users) {
			setRows(users.data);
		}
	}, [users]);

	return (
		<div className="flex flex-col gap-2 h-full">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2 border-l-8 border-blue-500 px-2">
					<BiUser className="text-xl" />
					<h1 className="text-lg font-semibold">User List</h1>
				</div>
				<div>
					<Link
						to={"create-user"}
						className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 flex items-center justify-center shadow-md"
					>
						<AiOutlinePlus />
						<span>Create User</span>
					</Link>
				</div>
			</div>
			<div className="bg-white p-4 rounded w-full">
				<table className="w-full">
					<thead className=" border-t-2 border-b-2 border-slate-400">
						<tr>
							<th className="text-start py-2 px-2">Id</th>
							<th className="text-start py-2 px-2">Name</th>
							<th className="text-start py-2 px-2">Email</th>
							<th className="text-start py-2 px-2">Phone</th>
							<th className="text-start py-2 px-2">Address</th>
							<th className="text-end py-2 px-2">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className="py-1 border-b border-slate-200 hover:bg-slate-100 cursor-pointer">
							<td className="py-3 px-2">1</td>
							<td className="py-3 px-2">Malcolm Lockyer</td>
							<td className="py-3 px-2">gg@gmail.com</td>
							<td className="py-3 px-2">
								<div className="flex justify-start items-center gap-2">
									<FaPhoneSquareAlt className="text-xl" />
									<p>09-765487654</p>
								</div>
							</td>
							<td className="py-3 px-2">
								<p>Yangon</p>
							</td>
							<td className="py-3 px-2">
								<div className="flex justify-end  gap-2">
									<Link
										to={"create-user"}
										className="bg-green-500 px-2 py-1 rounded text-white hover:bg-green-600 flex items-center justify-center gap-2 shadow-md"
									>
										<BiEdit />
										<span>Edit</span>
									</Link>
									<Link
										to={"create-user"}
										className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600 flex items-center justify-center gap-2 shadow-md"
									>
										<RiDeleteBinLine />
										<span>Delete</span>
									</Link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserListPage;
