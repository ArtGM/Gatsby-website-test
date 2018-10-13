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
					<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
					<script src="components/assets/js/browser.min.js" />
					<script src="components/assets/js/breakpoints.min.js" />
					<script src="components/assets/js/util.js" />
					<script src="components/assets/js/main.js" />
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