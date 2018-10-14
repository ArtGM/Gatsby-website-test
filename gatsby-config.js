module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'AM Portfolio',
				short_name: 'portfolio',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-sass'
	]
};
