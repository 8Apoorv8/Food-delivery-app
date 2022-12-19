import React from "react";

const BannerName = ({ name, discount, link }) => {
  return (
    <div className="BannerContent p-[8px] flex  justify-between">
      <div>

        <h3 className="text-xl font-semibold text-zinc-600">Hello {name}</h3>
        <p className=" text-zinc-500 my-2 ">
          Get Free Discount for Every
          <span className="text-amber-500 text-xl font-bold">
            {" "}
            ${discount}
          </span>{" "}
          Purchase
        </p>
        <a
          href={link}
          className="bg-amber-400 w-fit text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          learn More
        </a>
      </div>
      <div> <img
        src="https://cdn.pixabay.com/photo/2016/05/30/14/10/delivery-guy-1424808__340.png"
        alt="bannerImg"
        className=" w-[140px] bg-cover"
      /></div>
    </div>
  );
};

export default BannerName;
