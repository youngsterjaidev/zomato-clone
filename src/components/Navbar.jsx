import React from "react";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3">
      <div>
        <FiAlignJustify size={30} color="green" />
      </div>
      <div className="hidden sm:block">Get App</div>
      <ul className="hidden sm:flex">
        <li>Investor Relation</li>
        <li>Add Restaurant</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
};

export default Navbar;
