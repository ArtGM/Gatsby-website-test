import React from 'react';

const Contact = () => (
	<article id="contact">
		<h2 className="major">Contact</h2>
		<form method="post" action="#">
			<div className="fields">
				<div className="field half">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" />
				</div>
				<div className="field half">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" />
				</div>
				<div className="field">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" rows="4" />
				</div>
			</div>
			<ul className="actions">
				<li>
					<input type="submit" value="Send Message" className="primary" />
				</li>
				<li>
					<input type="reset" value="Reset" />
				</li>
			</ul>
		</form>
		<ul className="icons">
			<li>
				<a href="https://github.com" className="icon fa-github">
					<span className="label">GitHub</span>
				</a>
			</li>
		</ul>
	</article>
);

export default Contact;
