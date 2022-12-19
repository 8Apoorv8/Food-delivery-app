import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { Items } from "./Data";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

let cartDATA = []
const ItemCart = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFav, setFav] = useState(false);
  const [currVal, setCurrVal] = useState(Math.floor(ratings));


  const [iscart, setCart] = useState(null)
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    if (iscart) {
      cartDATA.push(iscart)
      dispatch({
        type: actionType.SET_CART,
        cart: cartDATA
      })
      console.log(cartDATA);
    }
  }, [iscart])
  const handleClick = (value) => {
    setCurrVal(value);
  };
  return (
    <div key={itemId} className="flex flex-col  shadow-xl rounded w-[160px] h-[230px] justify-center  px-4 py-2">
      <div className="IMG">
        <img src={imgSrc} alt="foodImg" className=" w-[100px] h-[100px]" />
      </div>
      <div className="CONTENT relative">
        <div
          className="HEART absolute right-0 -top-24 text-red-500 cursor-pointer"
          onClick={() => setFav(!isFav)}
        >
          {isFav ? <AiFillHeart /> : <BiHeart />}
        </div>
        <div className="text-lg font-medium">{name}</div>
        <h3 className="flex">
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <div
              key={i}
              className={`RATING  my-1 cursor-pointer ${currVal > i ? "text-amber-400" : "text-gray-800"
                }`}
              onClick={() => handleClick(i + 1)}
            >
              <AiFillStar size={13} />
            </div>
          ))}
        </h3>
        <div className="flex items-center w-full justify-between">
          <h4 className="text-xl">
            <span className="text-amber-400">$</span>
            {price}
          </h4>
          <div className="text-amber-400 cursor-pointer" >
            <BsFillCartPlusFill size={24} onClick={() => setCart(Items.find(n => n.id === itemId))} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

{
  /* <div className="ITEM_CARD w-[160px] h-[180px] relative flex flex-col justify-end items-center my-[10px] shadow-xl rounded-lg border">
<div className="flex  relative">
  <div className="IMG_BOX w-[100px] h-[100px] rounded-full flex items-center justify-center ">
    <img
      src={imgSrc}
      alt="MainImg"
      className="w-full h-full object-contain  bg-red-400  "
    />
  </div>
  <div
    className={`IS_FAVORITE absolute -bottom-3 -right-2 text-red-500 cursor-pointer active:text-red-700  ${
      isFav ? `active` : ``
    }`}
    onClick={() => setFav(!isFav)}
  >
    <BiHeart />
  </div>
</div>
<div className="ITEM_CONTENT bg-white w-full p-4  rounded flex flex-col ">
  <h3 className="ITEM_NAME text-xl cursor-pointer">{name}</h3>
  <div className="BOTTOM flex flex-col">
    <div className="RATINGS flex items-center ">
      {Array.apply(null, { length: 5 }).map((e, i) => (
        <div
          key={i}
          className={`RATING  my-1 cursor-pointer ${
            currVal > i ? "text-amber-400" : "text-gray-800"
          }`}
          onClick={() => handleClick(i + 1)}
        >
          <AiFillStar size={13} />
        </div>
      ))}
    </div>
    <div className="flex items-center w-full justify-between">
      <h3 className="PRICE text-lg font-semibold">
        <span className="text-amber-400">$</span> {price}
      </h3>
      <div className="text-amber-400 cursor-pointer">
        <BsFillCartPlusFill size={26} />
      </div>
    </div>
  </div>
</div>
</div> */
}
