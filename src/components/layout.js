/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-black min-h-screen">
      <Header siteTitle={data.site.siteMetadata?.title || `Daily NightCity`} />
      <div>
        <main>{children}</main>
        <footer className="text-center text-gray-400 py-8 mt-16 border-t border-white/20">
          © {new Date().getFullYear()} Daily NightCity — compagnon de campagne Cyberpunk Red
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
