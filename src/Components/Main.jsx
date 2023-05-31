import CardUser from "./CardUser";
import BeforeFetch from "./BeforeFetch";
import Loader from "./Loader";
// import axios from "axios";
import useFetchReset from "./Hooks/FetchReset";

const Main = () => {
	const { loading, users, fetchData, Reset } = useFetchReset();

	console.log(users);

	return (
		<>
			<header className="shadow-md flex justify-around h-12 items-center rightColor fixed top-0 w-full text-white">
				<button onClick={Reset} className="text-xl font-semibold">
					Vitor Correa
				</button>
				<button onClick={fetchData} disabled={loading}>
					{loading ? "Loading..." : "Get Users"}
				</button>
			</header>
			<main className="my-9">
				{loading ? (
					<Loader />
				) : (
					<>
						{users.length === 0 && <BeforeFetch />}
						<div className="Gridao gap-y-12 py-8 px-12 place-items-center">
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
