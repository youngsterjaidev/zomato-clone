import React from "react"
import { Link } from "react-router-dom"

const RNavbar = () => {
  return (
    <nav className="flex justify-between p-3">
      <Link to="/">Zumato</Link>
      <ul className="flex justify-between gap-2">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default RNavbar