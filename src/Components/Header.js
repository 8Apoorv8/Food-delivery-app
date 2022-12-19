import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ setToggle, toggle }) => {


  return (

    <header className="flex py-[5px] px-[15px] justify-between items-center z-10 fixed w-full top-0 left-0 shadow-md bg-[#faf9fb] md:px-28 lg:px-48">
      <img
        src="https://i.pinimg.com/736x/65/72/32/657232fbf8287e749c61ce32a579453c.jpg"
        alt="Logo"
        className="w-10 cursor-pointer"
      />
      <div className="flex items-center bg-white shadow-md px-2 rounded-lg">
        <BiSearchAlt2 size={30} style={{ color: "gray" }} />
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 focus:outline-none rounded-sm w-[120px] text-gray-600 text-xs font-semibold"
        />
      </div>
      <div className="flex items-center relative">
        <BsFillCartFill size={35} className="text-zinc-700" />
        <p className="absolute bg-amber-400 text-white px-[0.41rem] py-[0.01rem] rounded-full -top-1 -right-2 flex justify-center items-center">
          1
        </p>
      </div>
      <div className="flex flex-col">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="ProfileImg"
          className="w-10 rounded-full object-cover "
        />
        <h2 className="text-center text-xs hidden">Apoorv</h2>
      </div>

      <div
        className="TOGGLE cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <GiHamburgerMenu size={30} />
      </div>
    </header>
  );
};

export default Header;
