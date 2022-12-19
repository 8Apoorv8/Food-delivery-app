import React from "react";
import { BiDownArrow } from "react-icons/bi";
const SubMenuContainer = ({ name }) => {
  return (
    <div className="SUB_MENU_CONTAINER flex justify-between items-center text-lg font-medium">
      <h3>{name}</h3>
      <div className="VIEW_ALL flex justify-between items-center ">
        <p className="text-amber-500">View All</p>
        <div className="bg-amber-500 ml-2 text-center p-1 rounded-md text-white">
          <BiDownArrow className=" " />
        </div>
      </div>
    </div>
  );
};

export default SubMenuContainer;
