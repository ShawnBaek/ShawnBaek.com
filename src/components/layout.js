import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import "../styles/main.scss"

class Layout extends Component {
    render() {
        const data = this.props.data
        return (
            <div>
                {/* <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                    >
                    <html lang="en" />
                </Helmet>
                <Header siteTitle={data.site.siteMetadata.title} /> */}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const siteTitleQuery = graphql`
query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`