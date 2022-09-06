import { login } from "@apis/auth/login";
import React, { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
	const emailRef = useRef<any>();
	const passwordRef = useRef<any>();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	if (token) {
		return <Navigate to={"/"}></Navigate>;
	}

	const loginHandle = async () => {
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		!email ?? emailRef.current?.focus();
		!password ?? passwordRef.current?.focus();

		if (email && password) {
			const data = await login({ email, password });

			if (data.success === false) {
				toast.error("Wrong Credentials!");
			}

			if ("data" in data) {
				toast.success("Login success");
				localStorage.setItem("token", data.data.token);
				navigate("/");
			}
		}
	};

	return (
		<div className="w-full h-full">
			<div className="w-full h-full flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-10 rounded">
					<div className="flex justify-center">
						<img src="/auth.gif" className="w-100 md:w-[500px]" alt="" />
					</div>
					<div>
						<div className="flex justify-center items-center flex-col gap-14">
							<div>
								<p className="text-base md:text-4xl font-semibold font-quicksand text-blue-500">
									Login
								</p>
							</div>
							<div className="flex w-full flex-col gap-2">
								<label className="text-sm md:text-base font-semibold">
									Email:
								</label>
								<input
									type="text"
									className="w-full border border-blue-400 rounded p-2 "
									ref={emailRef}
								/>
								<label className="text-sm md:text-base font-semibold">
									Password:
								</label>
								<input
									type="password"
									className="w-full border border-blue-400 rounded p-2"
									ref={passwordRef}
								/>
								<div className="pt-4">
									<button
										className="w-full bg-blue-500 text-white py-2 px-10 rounded"
										onClick={loginHandle}
									>
										Login
									</button>
									<Link
										to={"/register"}
										className="flex justify-end text-blue-500 hover:underline"
									>
										Create account?
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
