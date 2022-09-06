import fetcher from "@apis/fetcher";
import useSWR from "swr";

export interface UserInformation {
	success: boolean;
	message: string;
	data: Data;
}

export interface Data {
	user: User;
}

export interface User {
	id: number;
	name: string;
	email: string;
	password: string;
	role: string;
	createdAt: string;
	updatedAt: string;
}

export const getMe = async (token?: string) => {
	const api = import.meta.env.VITE_API_URL;
	const user = (await fetch(api + "auth/me", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((res) => res.json())) as UserInformation;
	return user;
};
