import React from "react";

const MenuContainer = ({ link, icon }) => {
  return (
    <li className="relative list-none w-[60px] h-[60px]  z-10 flex">
      <a
        href={link}
        className="relative flex justify-center items-center w-full flex-col"
      >
        <span className=" relative block text-gray-800  py-4 active:scale-110  transition-all">
          {icon}
        </span>
      </a>
    </li>
  );
};

export default MenuContainer;
