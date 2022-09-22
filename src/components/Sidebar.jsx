import React from "react";
import "../index.css";
// import { AiOutlineMenu, AiFillYoutube } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";

function Sidebar({ menu, openMenu }) {
  return (
    <div className="sidebar">
      {!menu ? (
        <div className="sidebar pb-4 border-b-[1px] w-[70px] pt-5 space-y-3">
          <h1 className="hover:bg-[#c9c8c84d] w-full py-3 text-[10px] text-center flex flex-col items-center cursor-pointer">
            <span className="material-symbols-outlined text-[1.7rem] ">
              <MdHomeFilled />
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
        <div className="hidden md:block scroll overflow-y-scroll w-[240px] h-[90vh] pr-1 pt-3 pb-8">
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
              <span class="material-symbols-outlined text-[1.5rem] mr-6">
                theaters
              </span>
              Movies & Shows
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span class="material-symbols-outlined text-[1.5rem] mr-6">
                stadia_controller
              </span>
              Gaming
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span class="material-symbols-outlined text-[1.5rem] mr-6">
                lightbulb
              </span>
              Learning
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span class="material-symbols-outlined text-[1.5rem] mr-6">
                sports_basketball
              </span>
              Sports
            </h1>
            <h1 className="hover:bg-[#dbdada5d] w-full px-[1.4rem] py-[0.5rem]  flex items-center text-[14px] cursor-pointer">
              <span class="material-symbols-outlined text-[1.5rem] mr-6">
                styler
              </span>
              Fashion
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
