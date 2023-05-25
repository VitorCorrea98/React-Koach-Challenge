const BeforeFetch = () => {
	return (
		<main className="flex flex-col items-center m-28 gap-8">
			<h1 className="text-3xl">
				This is a simple React App made for the challenge of Koach
			</h1>
			<ul className="text-left list-decimal space-y-4 text-lg">
				<li>
					Create a User card grid layout with having navbar showing
					any brand name
				</li>
				<li>
					Add a button in the navbar saying 'Get Users', which makes
					an API call to get the user data
				</li>
				<li>Use reqres.in/api/users?page=1 to get the data</li>
				<li>Show a loader while the API fetches the data</li>
				<li>
					Bonus points for using custom CSS/SASS/styled-components
				</li>
				<li>Bonus points for clean code</li>
			</ul>
		</main>
	);
};

export default BeforeFetch;
