import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let cartItems = []
const CartItem = ({ name, imgSrc, price, itemId }) => {
  const [qty, setQty] = useState(1)
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price))

  useEffect(() => {

    cartItems = cart
    setItemPrice(parseInt(qty) * parseFloat(price))

  }, [qty])



  const updateQantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1)
    }
    else {
      if (qty === 1) {
        cartItems.pop(id)
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems
        })
      }
      setQty(qty - 1)
    }
  }
  return (
    <div className="shadow rounded-md w-full flex items-center justify-between my-2">
      <div className="LEFT flex items-center ">
        <img
          src={imgSrc}
          alt="itemIMG"
          className="w-[100px] bg-sky-200 mr-2 rounded-md p-2"
        />
        <div className="MID flex flex-col h-full  w-[200px] ">
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex items-center w-full justify-between">
            <h1 className="text-lg text-amber-400">x{qty}</h1>
            <div className="flex">
              <div onClick={() => updateQantity("remove", itemId)} className="cursor-pointer">
                <AiOutlineMinus />
              </div>
              <div>

                <AiOutlinePlus className="ml-2 cursor-pointer" onClick={() => updateQantity("add", itemId)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="RIGHT ">
        <h1 className="text-xl">
          <span className="text-amber-400">$</span>
          {itemPrice}
        </h1>
      </div>
    </div >
  );
};

export default CartItem;
