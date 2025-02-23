import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className="flex items-center justify-between w-full p-4 border-b bg-rgb(240, 240, 240)">

      <Link to={"/"} className="mx-2 justify-start">LOGO</Link>

      <ul className="flex md:space-x-6 space-x-4 md:text-lg text-sm font-medium md:px-6 px-1">
        <Link to="/page">Page</Link>
      </ul>
    </nav>
  );
}

export default NavBar;