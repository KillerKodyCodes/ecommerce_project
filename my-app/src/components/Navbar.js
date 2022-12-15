import"../stylesheets/nav.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import bannerLogo from '../images/bannerLogo.jpg'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img classname="logo"src={bannerLogo} alt="logo" height="100rem"/>
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}