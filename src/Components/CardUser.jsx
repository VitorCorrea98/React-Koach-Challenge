const CardUser = ({ firstName, lastName, email, avatar, id }) => {
	return (
		<div
			className="xl:w-72 lg:w-64 md:w-52 sm:w-48  rounded-xl border border-slate-400 shadow-lg p-5 space-y-2 flex flex-col"
			key={id}>
			<img src={avatar} alt={firstName} className="xl" />
			<div className="p-1 xl: ">
				<h3 className="xl:text-2xl lg:text-lg sm:text-sm">
					{firstName} {lastName}
				</h3>
				<p className="xl:text-xl lg:text-md sm:text-xs">{email}</p>
			</div>
		</div>
	);
};

export default CardUser;
