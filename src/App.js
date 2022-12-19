
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsGear, BsChatLeftText, BsFiles } from "react-icons/bs";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import MenuCard from "./Components/MenuCard";

import { MenuItems, Items } from "./Components/Data";
import ItemCart from "./Components/ItemCart";
import DebitCard from "./Components/DebitCard";
import CartItem from "./Components/CartItem";
import { useStateValue } from "./Components/StateProvider";
function App() {
  const [toggle, setToggle] = useState(false);
  // filtering dish according to category

  const [isMainData, setMainData] = useState(
    Items.filter((ele) => ele.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue();
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((ele) => {
      ele.addEventListener("click", setMenuActive);
    });

    // Caregory Menu active change
    function setMenuCardsActive() {
      menuCards.forEach((e) => e.classList.remove("active"));
      this.classList.add("active");
    }
    const menuCards = document
      .querySelector(".ROW_CONTAINER")
      .querySelectorAll(".ROW_MENU_CARD");
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardsActive));
  }, [isMainData, cart]);

  // filters Data based on category once clicked
  const setData = (itemId) => {
    setMainData(Items.filter((ele) => ele.itemId === itemId));
  };

  return (
    <div
      className="App w-[100vw] h-[100vh]
    overflow-x-hidden scrollbar-none"
    >
      <Header setToggle={setToggle} toggle={toggle} />
      <main>
        <div className="MAIN_CONATINER w-[100vw] h-auto bg-[#faf9fb] mt-[60px] p-[10px] pb-[100px]">
          {/* Banner */}
          <div className="Banner w-full h-[130px]  rounded bg-cover  relative  px-[10px] overflow-hidden  md:px-28 lg:px-48">
            <BannerName name={"Apoorv"} discount={"20"} link={"#"} />

          </div>
          <div className="DISH_CONTAINER w-full py-[10px] md:px-28 lg:px-48">
            <div className="MENU_CARD w-full  ">
              <SubMenuContainer name={"Category Menu"} />
            </div>
            <div className="ROW_CONTAINER flex items-center overflow-x-scroll overflow-y-hidden my-[10px] py-[10px] scrollbar-none">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="DISH_ITEM_CONTAINER flex justify-around items-center flex-wrap gap-3 ">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCart
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        {toggle ? (
          <div className="RIGHT_MENU w-[400px] h-[calc(100%-55px)] bg-[#fafafa] fixed right-0 top-[55px] z-[100] flex flex-col items-center py-[20px] px-[10px] shadow-xl transition-all  duration-200 ease-in-out ">
            <div className="DEBIT_CARD_COTAINER p-[10px] w-full h-auto ">
              <div className="DEBIT_CARD relative w-full h-[170px]  min-w-[300px] min-h-[170px] rounded ">
                <DebitCard />
              </div>
            </div>
            <div className="w-full my-1">
              <SubMenuContainer name={"Carts Items"} />
            </div>
            {!cart ? (
              <div></div>
            ) : (
              <div className="CART_CHECKOUT_CONTAINER overflow-y-scroll">
                <div className="CART_CONTAINER w-[400px] p-4 relative">
                  <div className="CART_ITEMS w-full  ">
                    {cart &&
                      cart.map((data) => (
                        <CartItem
                          key={data.id}
                          itemId={data.id}
                          name={data.name}
                          imgSrc={data.imgSrc}
                          price={data.price}
                        />
                      ))}
                  </div>
                </div>
                <div className="z-[100] fixed bottom-0 ml-2 bg-white w-[400px] h-[90px]">
                  <div className="flex w-full justify-between px-4 mt-2 text-xl">
                    <h3>Total</h3>
                    <h2>
                      <span className="text-amber-400">$</span> 45.0
                    </h2>
                  </div>
                  <h1 className="bg-amber-400 w-[340px] text-center ml-7 my-2 text-white text-xl font-bold rounded-2xl cursor-pointer">
                    Check Out
                  </h1>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="fixed -right-[200px] top-[55px] transition-all duration-200 ease-in-out "></div>
        )}
      </main>
      <div className="fixed bottom-0 left-0 flex items-center justify-center w-full h-[60px] bg-[#d5d5d5] rounded-tl-3xl rounded-tr-3xl z-50 md:px-28 lg:px-48">
        <ul id="menu" className="flex  w-full justify-around ">
          {/* <div className="INDICATOR absolute h-[60px] w-[60px] bg-[#f8901c] left-5 border-2 border-white active:-translate-y-7 rounded-full transition-all "></div> */}
          <MenuContainer
            link={"#"}
            icon={<AiOutlineHome size={30} style={{ color: "red" }} />}
          />
          <MenuContainer link={"#"} icon={<BsChatLeftText size={30} />} />
          <MenuContainer link={"#"} icon={<AiOutlineHeart size={30} />} />
          <MenuContainer link={"#"} icon={<BsFiles size={30} />} />
          <MenuContainer link={"#"} icon={<BsGear size={30} />} />
        </ul>
      </div>
    </div>
  );
}

export default App;
