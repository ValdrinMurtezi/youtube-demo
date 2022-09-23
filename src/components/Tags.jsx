import React from "react";
import "../index.css";

function Tags() {
  return (
    <div className="tags z-[99] sticky top-[56px] min-h-[3.5rem] py-1 pl-auto md:pl-[35rem] lg:pl-[1rem] border-y-[1px] flex items-center justify-center md:justify-start ">
      {/* <div className="px-4 tags-content w-full h-full flex  items-center justify-start space-x-4 mx-auto"> */}
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        All
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Mixes
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Live
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Music
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Computer programming
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Sketch comedy
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Watched
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        New uploads
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Next videos
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Artificial Intelligence
      </span>
      <span className="bg-[#bbbdbb3d] hover:bg-[#bbbdbb56] cursor-pointer option mr-4 options border-[0.5px] border-[#8080804f] px-3 py-[2px] rounded-3xl">
        Next videos
      </span>
    </div>
    // </div>
  );
}

export default Tags;
