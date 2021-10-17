/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TopMenu from "./TopMenu/topMenu"
import Slider from "./Slider/slider"
import Services from "./Services/services"
import "./layout.css"
import "./main.css"


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
    <>
      <header>
        <TopMenu siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Slider />
      </header>
      <main><Services /></main>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {/* <main>{children}</main> */}
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout
