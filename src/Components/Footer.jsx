const Footer = () => {
	return (
		<footer className="rightColor fixed bottom-0 w-full p-4 text-white flex md:justify-start sm:justify-center">
			<h2>
				© {new Date().getFullYear()}
				<a
					className="text-xl underline underline-offset-2 hover:no-underline"
					href="https://github.com/VitorCorrea98"
					target="_blank"
					rel="noreferrer">
					Vitor Correa
				</a>
			</h2>
		</footer>
	);
};

export default Footer;
