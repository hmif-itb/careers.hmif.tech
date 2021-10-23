import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Link
    to="/"
    style={{
      textDecoration: `none`,
    }}
  >
    <header className="bg-hmif-yellow w-full">
      <div className="py-2 px-6 md:px-48">
        <div className="font-heading font-bold text-center text-black leading-none text-4xl my-3">
          {siteTitle}
        </div>
      </div>
    </header>
  </Link>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
