import React from "react";
import ReactPlayer from 'react-player'


const EnjoyTv = () => {
   
  return (
    <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[50px] py-[50px]">
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:text-left text-center">
        <div className="pl-5">
          <h1 className="md:text-5xl text-4xl text-white font-bold">Enjoy on your TV</h1>
          <p className="md:text-2xl text-xl text-white py-8">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className="relative">
       
        <div className="absolute overflow-hidden max-w-[73%] max-h-[54%] top-[20%] left-[13%] z-[1] object-fit">
        <ReactPlayer url="image/vedio.m4v" controls={false} playing={true} loop={true} muted={true} width={"100%"} height={"100%"}/>
        </div>

          <img src="image/tv.png" alt="" className="relative z-[2] w-full"/>
        </div>
      </div>
    </div>
  );
};

export default EnjoyTv;
