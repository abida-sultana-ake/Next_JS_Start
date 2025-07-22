import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center  bg-gray-500 p-7">
        <ul className="flex justify-between w-1/3">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
