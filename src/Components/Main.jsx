import React, { useState } from "react";
import CardUser from "./CardUser";
import BeforeFetch from "./BeforeFetch";
import Loader from "./Loader";
import axios from "axios";

const Main = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);

	const Timeout = (time) => setTimeout(() => setLoading(false), time);

	const Fetch = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				"https://reqres.in/api/users?page=1"
			);
			setUsers(response.data.data);
			Timeout(3000);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const Reset = () => {
		setLoading(true);
		setUsers([]);
		Timeout(3000);
	};

	return (
		<>
			<header className="shadow-md flex justify-around h-12 items-center rightColor fixed top-0 w-full text-white">
				<h1 onClick={Reset} className="text-xl font-semibold ">
					Vitor Correa
				</h1>
				<button onClick={Fetch} disabled={loading}>
					{loading ? "Loading..." : "Get Users"}
				</button>
			</header>
			<main className="my-9">
				{loading ? (
					<Loader />
				) : (
					<>
						{users.length === 0 && <BeforeFetch />}
						<div className=" Gridao gap-y-12  py-8 px-12 place-items-center">
							{users.map((user) => (
								<CardUser
									key={user.id}
									firstName={user.first_name}
									lastName={user.last_name}
									email={user.email}
									avatar={user.avatar}
									id={user.id}
								/>
							))}
						</div>
					</>
				)}
			</main>
		</>
	);
};

export default Main;
