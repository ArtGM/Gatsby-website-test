import React, { Component } from 'react';
import Menu from './menu';

import logo from '../images/SVG/logo.svg';

export default class Header extends Component {
	componentDidMount = () => {};
	render() {
		//const { siteTitle } = this.props;
		return (
			<header id="header">
				<div className="logo">
					<img id="logo" src={logo} alt="AM logo" />
				</div>

				<Menu />
				<div className="content">
					<div className="inner">
						<h1>Arthur Morisson</h1>
						<p>
							Bonjour, je suis <strong>développeur web</strong>. <br /> Je réalise votre{' '}
							<strong>projet</strong>
							de <br /> <strong>site internet</strong> <br /> pour développer votre activité en ligne.
						</p>
					</div>
				</div>
			</header>
		);
	}
}
