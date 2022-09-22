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
    <div className="w-full flex flex-col ">
      <Header openMenu={openMenu} />

      <div className="w-[100%] h-full flex">
        <div className="w-auto">
          <Sidebar menu={menu} />
        </div>
        <div className="w-full">
          <Tags />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default Main;
