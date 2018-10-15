import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

//CSS
import './assets/css/main.css';
//import './assets/css/noscript.css';
import './assets/css/font-awesome.min.css';

const Layout = ({ children, location }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => (
				<React.Fragment>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: 'description', content: 'Sample' },
							{ name: 'keywords', content: 'sample, something' }
						]}
					>
						<html lang="fr" />
					</Helmet>
					<div id="wrapper">
						<Header siteTitle={data.site.siteMetadata.title} location={location} />
						{children}
						<Footer />
					</div>
					<div id="bg" />
				</React.Fragment>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
