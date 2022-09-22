import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Tags from "./Tags";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayingVideo from "./Playing-Video";

function Main() {
  const [menu, setMenu] = useState(true);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full flex ">
      <div className="w-[300px] pr-3  ">
        <Sidebar menu={menu} openMenu={openMenu} />
      </div>

      <div className="w-[100%] h-full">
        <Header />
        <Tags />
        <Body />
      </div>
    </div>
  );
}

export default Main;
