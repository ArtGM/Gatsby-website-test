import React from 'react';
import PropTypes from 'prop-types';

import main from './components/assets/js/main';
import util from './components/assets/js/util';

export default class HTML extends React.Component {
	componentdidMount() {
		main();
		util();
	}

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
					{/* <script dangerouslySetInnerHTML={{ __html: breakpoints }} ></script> */}
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
