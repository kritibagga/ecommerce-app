import React from "react";
const Header = () => {
	return (
		<div className='header-wrap'>
			<div className='header-brand'>
				<i className='fa-solid fa-store'></i>KrytLabs
			</div>
			<form className='header-search'>
				<input
					type='search'
					name='search'
					placeholder='Search...'
				/>{" "}
				<i className='fa-solid fa-search search-icon'></i>
			</form>

			<ul>
				<li>
					<a
						href='https://www.google.com/'
						alt='header-home'>
						<i className='fa-solid fa-home header-icon'></i>
						My Account
					</a>
				</li>
				<li>
					<a
						href='https://www.google.com/'
						alt='header-Register'>
						<i className='fa-solid fa-user-pen header-icon'></i>
						Register
					</a>
				</li>
				<li>
					<a
						href='https://www.google.com/'
						alt='header-SignIn'>
						<i className='fa-solid fa-right-to-bracket header-icon'></i>
						Sign In
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
