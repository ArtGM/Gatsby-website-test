import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
	render() {
		return (
			<html {...this.props.htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					{this.props.headComponents}
				</head>
				<body className="is-preload" {...this.props.bodyAttributes}>
					{this.props.preBodyComponents}
					<div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}
					<script
						src="https://code.jquery.com/jquery-3.3.1.min.js"
						integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
						crossOrigin="anonymous"
					/>
					<script src="static/js/breakpoints.min.js" />
					<script src="static/js/browser.min.js" />
					<script src="static/js/main.js" />
					<script src="static/js/util.js" />
				</body>
			</html>
		);
	}
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};
