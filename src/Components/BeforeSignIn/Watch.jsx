import React from 'react'
import ReactPlayer from 'react-player'

const Watch = () => {
  return (
    <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[100px] py-[50px]">
    <div className="max-w-[1170px] mx-auto md:flex md:items-center px-3">
      <div className='md:text-left text-center pl-5'>
        <h1 className="md:text-5xl text-4xl text-white font-bold">Watch everywhere</h1>
        <p className="md:text-2xl text-xl text-white py-8">
        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </p>
      </div>

      <div className='relative '>
      {/* <ReactPlayer url={'image/vedio'} controls={true} /> */}
      <div className="absolute overflow-hidden max-w-[63%] max-h-[47%] top-[10%] left-[20%] z-[1] object-fit">
        <ReactPlayer url="image/video-devices-in.m4v" controls={false} playing={true} loop={true} muted={true} width={"100%"} height={"100%"} />
        </div>
     
        <img src="image/device-pile-in.png" alt="" className='relative z-[2] w-full'/>
      </div>
    </div>
  </div>
  )
}

export default Watch