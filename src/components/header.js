import React from 'react';
import Menu from './menu';

const Header = ({ siteTitle }) => (
	<header id="header">
		<div className="logo">
			<img src="F:\Documents\Developpement\Test\GatsbyJS\am-portfolio\src\images\SVG\logo.svg" alt="logo" />
		</div>
		<Menu />
		<div class="content">
			<div class="inner">
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
