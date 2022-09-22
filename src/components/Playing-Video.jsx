// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function PlayingVideo() {
//   const [data, setData] = useState([]);
//   const KEY = "AIzaSyDbtolgbe0-IAN-ho1UHrrylup9JK6KffY";
//   const API =
//     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US";

//   useEffect(() => {
//     // fetchData();
//     axios.get(`${API}&key=${KEY}`).then((res) => {
//       setData(res.data.items);
//       console.log(res.data.items);
//     });
//     const { title, channelTitle, thumbnails } = data;
//   }, []);
//   return (
//     <div className="w-full h-full cursor-pointer pb-4">
//       {" "}
//       <img src={data.thumbnails} className="w-full h-[9rem]" alt="" />
//       <h1 className="font-[500] pb-3">{data.title}</h1>
//       <p className="text-sm text-[#4b4a4a]">{data.channelTitle}</p>
//       <p className="text-sm text-[#4b4a4a]">
//         Published on: {data.publishedAt.slice(0, 10)}
//       </p>
//     </div>
//   );
// }

// export default PlayingVideo;
