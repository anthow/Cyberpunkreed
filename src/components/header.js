import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="border-b-2 border-white mb-5 text-white">
    <nav className="flex justify-between items-center px-2 py-4">
    <div>
      <h1 className=" text-3xl font-black text-red-600 ">
        <Link
          to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul className="flex space-x-4">
      <li> <Link to="/classes"> Classes</Link></li>
      <li> <Link to="/cartes"> Cartes</Link></li>
      <li><Link to="/lore">Lore</Link></li>

    </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
