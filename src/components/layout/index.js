import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import "./global.css"

const Layout = ({ children }) => (
  <div>
    <Header siteTitle="Gatsby Graph" />
    <main className={{ marginTtop: 0 }}>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
