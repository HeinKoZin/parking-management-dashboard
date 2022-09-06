import fetcher from "@apis/fetcher";
import useSWR from "swr";

export interface AllUserList {
	success: boolean;
	message: string;
	data: Daum[];
	pagination: Pagination;
}

export interface Daum {
	id: number;
	name: string;
	email: string;
	password: string;
	role: string;
	createdAt: string;
	updatedAt: string;
}

export interface Pagination {
	page: number;
	limit: number;
	total_page: number;
	total_items: number;
}

export const useAllUser = (token?: string) => {
	const api = import.meta.env.VITE_API_URL;
	const users = useSWR<AllUserList>([api + "users", token], fetcher);
	return users;
};
