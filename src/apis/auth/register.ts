export interface RegisterInput {
	name: string;
	email: string;
	password: string;
}

export interface RegisterSuccess {
	success: boolean;
	message: string;
}

export const register = async (data: RegisterInput) => {
	const url = import.meta.env.VITE_API_URL;

	let formData = new FormData();
	formData.append("name", data.name);
	formData.append("email", data.email);
	formData.append("password", data.password);

	const res = (await fetch(url + "auth/register", {
		method: "POST",
		body: formData,
	}).then((res) => res.json())) as RegisterSuccess;

	return res;
};
