import React from "react";
import cardgray from "../Assets/card.jpg";
const DebitCard = () => {
  return (
    <div className="bg-gradient-to-tr from-amber-300 to-amber-400 w-full h-full rounded-md">
      <div className="flex flex-col   py-8 px-8 text-white relative">
        <img
          src={cardgray}
          alt="cardGray"
          className="rounded-md opacity-80 w-[50px]"
        />
        <h3 className="font-semibold my-1 text-2xl">123 4567 8592 1578</h3>
        <div className="flex items-center w-full justify-between">
          <h2 className="font-mono text-xl">Apoorv Pandey</h2>
          <div className="font-thin ">10/22</div>
          <div className="font-thin ">12/29</div>
        </div>
        <div className="absolute right-6 text-3xl font-bold top-2 italic">
          VISA
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
