import React from "react"
import { Helmet } from "react-helmet"

import Header from "../header"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./layout.module.css"

const Layout = ({ children }) => (
  <div>
    <Helmet title="Gatsby Authentication and Graphing" />
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)

export default Layout
