import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center  bg-gray-500 p-7">
        <ul className="flex justify-between w-1/3">
          <Link href="/"> 
            <li>Home</li>
          </Link>
          <Link  href="/services">
            <li>Service</li>
          </Link>
          <Link  href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
