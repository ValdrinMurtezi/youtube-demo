import React from "react";
import "../index.css";
import { AiOutlineMenu, AiFillYoutube } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";

function Sidebar({ menu, openMenu }) {
  return (
    <div className="sidebar">
      <div className="w-full items-center pt-3 flex mr-4">
        <div className="w-full flex px-[1.4rem]">
          <button onClick={openMenu}>
            <AiOutlineMenu
              size="1.3rem"
              className="cursor-pointer mr-[1.5rem] ml-[0.1rem]"
            />
          </button>

          <h1 className="text-[1.3rem] font-[600] text-[#141414] flex items-center cursor-pointer font-roboto tracking-[-1.5px]">
            <AiFillYoutube size="2rem" className="text-[red]" />
            YouTube
          </h1>
        </div>
      </div>
      {!menu ? (
        <div className="sidebar pb-4 border-b-[1px] w-[70px] pt-5">
          <h1 className="hover:bg-[#c9c8c84d] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
            <span className="material-symbols-outlined text-[1.7rem] ">
              Home
            </span>{" "}
            Home
          </h1>
          <h1 className="hover:bg-[#dbdada3b] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
            <span className="material-symbols-outlined text-[1.6rem] ">
              explore
            </span>
            Explore
          </h1>
          <h1 className="hover:bg-[#dbdada3b] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
            <span className="material-symbols-outlined text-[1.6rem] ">
              music_video
            </span>
            Shorts
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
      ) : (
        <div className="scroll overflow-y-scroll w-full h-[90vh] pr-1 pt-6 pb-8">
          <div className="pb-4 border-b-[1px]">
            <h1 className="bg-[#c9c8c87c] w-full px-[1.4rem] py-[0.5rem] font-semibold flex items-center text-[14px] cursor-pointer">
              <span className="flex">
                <MdHomeFilled className="text-[1.5rem] mr-6" /> Home
              </span>{" "}
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                explore
              </span>
              Explore
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                music_video
              </span>{" "}
              Shorts
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                subscriptions
              </span>
              Subscriptions
            </h1>
          </div>
          <div className="py-4 border-b-[1px]">
            <h1 className="hover:bg-[#c9c8c84d] w-full px-[1.4rem] py-[0.5rem] flex items-center text-[14px] ursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                video_library
              </span>
              Library
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                history
              </span>{" "}
              History
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                add_to_queue
              </span>{" "}
              Your videos
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                schedule
              </span>
              Watch later
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                thumb_up
              </span>{" "}
              Liked videos
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                playlist_add
              </span>
              JavaScript
            </h1>
          </div>
          <div className="py-4 border-b-[1px]">
            <h1 className="w-full px-[1.4rem] pb-4 font-semibold text-[#727070e0]">
              EXPLORE
            </h1>
            <h1 className="hover:bg-[#c9c8c84d] w-full px-[1.4rem] py-[0.5rem] flex items-center text-[14px] ursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                video_library
              </span>
              Movies & Shows
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                history
              </span>{" "}
              Gaming
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                add_to_queue
              </span>{" "}
              Learning
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                add_to_queue
              </span>{" "}
              Sports
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span className="material-symbols-outlined text-[1.5rem] mr-6">
                add_to_queue
              </span>{" "}
              Your videos
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
