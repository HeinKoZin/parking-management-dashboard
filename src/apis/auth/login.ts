interface LoginInput {
	email: string;
	password: string;
}

export interface LoginSuccessResponse {
	success: boolean;
	message: string;
	data: Data;
}

export interface Data {
	user: User;
	token: string;
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

export interface LoginErrorResponse {
	success: boolean;
	message: string;
}

export const login = async (data: LoginInput) => {
	const url = import.meta.env.VITE_API_URL;

	let formData = new FormData();
	formData.append("email", data.email);
	formData.append("password", data.password);

	const res = (await fetch(url + "auth/login", {
		method: "POST",
		body: formData,
	}).then((res) => res.json())) as LoginSuccessResponse | LoginErrorResponse;

	return res;
};
