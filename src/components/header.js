import React, { Component } from 'react';
import Menu from './menu';
import $ from 'jquery';

import logo from '../images/SVG/logo.svg';
window.jQuery = window.$ = $;

export default class Header extends Component {
	componentDidUpdate = () => {
		//smart menu
		let smartMenu = $('#smart-menu'),
			theMenu = $('.menu-entry');

		smartMenu.click(() => {
			theMenu.slideToggle('slow');
			smartMenu.toggleClass('is-active');
		});
	};
	render() {
		//const { siteTitle } = this.props;
		return (
			<header id="header">
				<div className="logo">
					<img style={{ width: '70px' }} src={logo} alt="AM logo" />
				</div>
				<button id="smart-menu" class="hamburger hamburger--minus" type="button">
					<span class="hamburger-box">
						<span class="hamburger-inner" />
					</span>
				</button>
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
