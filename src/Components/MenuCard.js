import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./componentsCss/MenuCard.css";
const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div
      className={`ROW_MENU_CARD w-[80px] min-w-[80px] h-[100px] rounded  flex items-center justify-between flex-col p-[5px] shadow-md cursor-pointer transition-all mr-[12px] ${
        isActive ? `active` : ``
      }`}
    >
      <div className="IMG_BOX w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full bg-amber-400 flex items-center overflow-hidden ">
        <img
          src={imgSrc}
          alt="MenuImg"
          className="object-cover w-full h-full group-w-[80%] group-h-[80%]:"
        />
      </div>
      <h3 className="text-amber-400 font-semibold text-xl ">{name}</h3>
      <div className="LOAD_MENU w-[20px] h-[20px] rounded bg-amber-400 flex items-center justify-center ">
        <AiOutlineRight className="text-white ICON " size={20} />
      </div>
    </div>
  );
};

export default MenuCard;
