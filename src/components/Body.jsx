import React, { useState, useEffect } from "react";
import "../index.css";
import { AiFillYoutube } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

function Body() {
  const [data, setData] = useState([]);
  const KEY = "AIzaSyDbtolgbe0-IAN-ho1UHrrylup9JK6KffY";
  const API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US";

  useEffect(() => {
    // fetchData();
    axios.get(`${API}&key=${KEY}`).then((res) => {
      setData(res.data.items);
      console.log(res.data.items);
    });
  }, []);

  return (
    <div className="w-[100%] pl-1">
      <div className="flex flex-col">
        <div className="cover w-full flex items-center justify-center min-h-[17rem]">
          <div className="w-[94%] mx-auto h-full text-white flex flex-col justify-center">
            <div>
              <h1 className="text-3xl flex items-center font-roboto font-[400] pb-4">
                <AiFillYoutube className="text-[2.5rem] mr-1" /> YouTubeTV
              </h1>
              <p className="text-3xl font-bold">
                $30 to save, 3 months to explore.
              </p>
              <p className="text-2xl font-bold">
                Get $10 off per month for 3 months.
              </p>
            </div>
            <div className="pt-8 space-y-3">
              <button className="text-lg font-semibold px-3 py-[6px] border-2 ">
                CLAIM OFFER
              </button>
              <p className="text-sm text-[gray]">
                New users only. Cancel anytime. Terms apply.
              </p>
            </div>
          </div>
        </div>
        <div className="videos-container w-full gap-5 text-[black] pt-8 bg-[#bbbdbb3d] px-4">
          {data.map((video) => {
            return (
              <Link to={video.id}>
                <div
                  key={video.id}
                  className="w-full h-full cursor-pointer pb-4"
                >
                  {" "}
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    className="w-full h-[9rem]"
                    alt=""
                  />
                  <h1 className="font-[500] pb-3">{video.snippet.title}</h1>
                  <p className="text-sm text-[#4b4a4a]">
                    {video.snippet.channelTitle}
                  </p>
                  <p className="text-sm text-[#4b4a4a]">
                    Published on: {video.snippet.publishedAt.slice(0, 10)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
