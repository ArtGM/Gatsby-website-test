import React from 'react';
import Menu from './menu';

import logo from '../images/SVG/logo.svg';

const Header = ({ siteTitle }) => (
	<header id="header">
		<div className="logo">
			<img style={{ width: '70px' }} src={logo} alt="AM logo" />
		</div>
		<Menu />
		<div className="content">
			<div className="inner">
				<h1>Arthur Morisson</h1>
				<p>
					Bonjour, je suis <strong>développeur web</strong>. <br /> Je réalise votre <strong>projet</strong>
					de <br /> <strong>site internet</strong> <br /> pour développer votre activité en ligne.
				</p>
			</div>
		</div>
	</header>
);

export default Header;
