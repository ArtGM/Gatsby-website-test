import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'


//CSS 
import './assets/css/main.css'
import './assets/css/noscript.css'
import './assets/css/font-awesome.min.css'


const Layout = ({ children }) => (
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
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="fr" />
          <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" defer="true"></script>
          <script src="/static/js/breakpoints.min.js" type="text/javascript" defer="true"></script>
          <script src="/static/js/browser.min.js" type="text/javascript" defer="true"></script>
          <script src="/static/js/main.js" type="text/javascript" defer="true"></script>
          <script src="/static/js/util.js" type="text/javascript" defer="true"></script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        <Footer />
        <div id='bg'></div> 
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
