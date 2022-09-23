import React from "react";
import { AiOutlineSearch, AiOutlineMenu, AiFillYoutube } from "react-icons/ai";
import "../index.css";

function Header({ openMenu }) {
  return (
    <div className="w-full flex navbar bg-[#ffffffde]">
      <div className=" w-full h-[3.5rem] flex items-center justify-between md:justify-center pr-8 space-x-[0rem] lg:space-x-[5rem]">
        <div className="w-[150px] md:w-[300px] h-full items-center flex mr-4">
          <div className="w-full flex px-[1.4rem]">
            <button onClick={openMenu}>
              <AiOutlineMenu
                size="1.3rem"
                className="cursor-pointer mr-[1.5rem] ml-[0.1rem] hidden md:block"
              />
            </button>

            <h1 className="text-[1.3rem] font-[600] text-[#141414] flex items-center cursor-pointer font-roboto tracking-[-1.5px]">
              <AiFillYoutube size="2rem" className="text-[red]" />
              YouTube
            </h1>
          </div>
        </div>
        <div className="hidden w-[95%] md:w-[90%] lg:w-[60%] h-[2.4rem]  md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none border-[1px] ml-1 lg:ml-6 border-[#80808077] text-lg px-3 w-[95%] lg:w-[73%] h-full shadow-inner "
          />
          <button className="w-[60px] flex items-center justify-center hover:bg-[#bbbdbb3d] bg-[#c9c8c82a] border-[#80808077] border-[1px] border-l-0 h-full">
            <AiOutlineSearch size="1.5rem" className="text-[#504f4f]" />
          </button>
          <button className="mx-2 h-full w-[2.5rem] pt-1 rounded-full bg-[#c9c8c82a]">
            <span className="material-symbols-outlined text-[1.7rem]">mic</span>
          </button>
        </div>
        <div className="flex w-[130px] md:w-[120px] h-full gap-x-2 sm:gap-x-3 ml-0 items-center">
          <button className="inline md:hidden">
            <AiOutlineSearch size="1.5rem" className="text-[#504f4f]" />
          </button>
          <button>
            <span className="material-symbols-outlined text-[1.5rem]">
              video_call
            </span>
          </button>
          <button>
            <span className="material-symbols-outlined text-[1.5rem]">
              notifications_active
            </span>
          </button>
          <h1 className="text-2xl font-semibold px-2  rounded-full bg-[#179c80] text-white">
            V
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
