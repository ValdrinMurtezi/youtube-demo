import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Tags from "./Tags";

function Main() {
  const [menu, setMenu] = useState(true);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full flex flex-col h-full">
      <Header openMenu={openMenu} />

      <div className="w-[100%] flex m-0 p-0 h-full">
        <div className="w-auto">
          <Sidebar menu={menu} />
        </div>
        <div className="w-full">
          <Tags />
          <Body />
        </div>
      </div>
      <div className="flex md:hidden items-center py-2 w-full h-[3rem] border-t-[1px] sticky top-0 bottom-0 bg-[#fffffff6] ">
        <h1 className="hover:bg-[#c9c8c84d] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined text-[1.7rem] ">home</span>{" "}
          Home
        </h1>
        <h1 className="hover:bg-[#dbdada3b] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined text-[1.6rem] ">
            explore
          </span>
          Explore
        </h1>
        <h1 className="hover:bg-[#dbdada3b] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
          <span class="material-symbols-outlined text-[2rem]">add_circle</span>
        </h1>
        <h1 className="hover:bg-[#dbdada3b] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined text-[1.6rem] ">
            subscriptions
          </span>{" "}
          Subscriptions
        </h1>
        <h1 className="hover:bg-[#c9c8c84d] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
          <span className="material-symbols-outlined text-[1.6rem] ">
            video_library
          </span>{" "}
          Library
        </h1>
      </div>
    </div>
  );
}

export default Main;
