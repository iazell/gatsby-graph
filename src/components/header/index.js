import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import { isLoggedIn } from "../../services/auth"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/profile" className={styles[`header__link`]}>
          Profile
        </Link>
        <Link to="/" className={styles[`header__link`]}>
          Graph
        </Link>
      </nav>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
