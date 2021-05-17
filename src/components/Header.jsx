import React from 'react'

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="logo">elgrow.</div>
				<div className="contacts">
					<address>
						<a href="tel: + 7 922 152 15 63" className="contacts__phone">+ 7 922 152 15 63</a>
					</address>
					<div className="contacts__desc">c 9 до 18.00 по мск</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
