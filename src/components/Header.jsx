import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../index.css";

function Header() {
  return (
    <div className="w-full flex flex-col navbar bg-[#ffffffde]">
      <div className=" w-full h-[3.2rem] flex items-center justify-end pr-8 space-x-[6rem]">
        <div className="w-[70%] h-[2.5rem] flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none border-[1px] border-[#80808077] text-lg px-3 w-[73%] h-full shadow-inner "
          />
          <button className="w-[9%] flex items-center px-4 justify-center hover:bg-[#bbbdbb3d] bg-[#c9c8c82a] border-[#80808077] border-[1px] border-l-0 h-full">
            <AiOutlineSearch size="1.5rem" className="text-[#504f4f]" />
          </button>
          <button className="mx-2 h-full w-[2.5rem] pt-1 rounded-full bg-[#c9c8c82a]">
            <span className="material-symbols-outlined text-[1.7rem]">mic</span>
          </button>
        </div>
        <div className="flex w-[130px] h-full space-x-5 items-center">
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
