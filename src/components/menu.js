import React, { Component } from 'react';

export default class Menu extends Component {
	render() {
		return (
			<nav>
				<ul className="menu-entry">
					<li>
						<a href="#intro">Intro</a>
					</li>
					<li>
						<a href="#work">Work</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		);
	}
}
