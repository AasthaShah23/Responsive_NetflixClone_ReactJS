import React from "react";

const Download = () => {
  return (
    <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[60px] py-[50px]">
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center md:text-left text-center px-[15px]">
        <div className="relative md:order-1 order-2">
          <img src="image/mobile.jpg" alt=""  className="w-full"/>

          {/* <div className="sm:w-[60%] w-[80%] absolute sm:left-[17%] left-[10%] bottom-0 rounded-2xl bg-black grid grid-cols-[80%_auto] border-2 border-[#ccc] items-center">
            <div className="grid grid-cols-[20%_auto] p-4 gap-[1px] items-center">
              <div>
                <img src="image/boxshot.png" alt="" />
              </div>
              <div className="text-white text-sm sm:text-xl">
                <h3>Stranger Things</h3>
                <span className="text-[blue]">Downloading...</span>
              </div>
            </div>
            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
                className="rounded-full sm:w-full w-[70%] flex items-center"
              />
            </div>
          </div> */}

          <div className="overflow-hidden absolute s:left-[20%] s:bottom-[5%] left-[10%] bottom-[3%] mx-auto bg-black flex item-center w-[60%] min-w-[15rem] border-[2px] border-solid border-[rgba(128,128,128,0.7)] rounded-[0.75rem] z-[1] p-[0.35rem_0.75rem]" >
              <div className="mr-[1rem]">
              <img src="image/boxshot.png" alt="" className="sm:h-[70px] sm:w-[60px] h-[38px] w-[44px]  "/>
              </div>

              <div className="text-left mx-[0.3rem] w-full flex flex-col justify-center ">
                  <h1 className="text-[1rem] text-white font-medium">Stranger Things </h1>
                  <p className="text-[#0071eb] text-[0.875rem] font-normal">Downloading</p>
              </div>

              <div
              className="
                w-[48px]
                sm:h-[60px]
                h-[48px]
                outline-2
                outline
                outline-black
                -outline-offset-2
                block
                bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')]
                bg-center
                bg-no-repeat
                grow-0
                shrink-0
              "
              >
            
              </div>
          </div>
        </div>

        <div className="md:order-2 order-1 mx-auto ">
          <h1 className="md:text-5xl text-2xl text-white font-bold md:leading-[50px] leading-[45px]">
            Download your shows to watch offline
          </h1>
          <p className="md:text-2xl text-xl text-white py-3">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;

// import React from "react";

// const Download = () => {
//   return (
//     <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[80px] py-[50px]">
//       <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
//         <div className="text-white md:order-1 order-2">

//         </div>
//         <div className="text-white md:order-2 order-1">mcnvjhuf</div>
//       </div>
//     </div>
//   );
// };

// export default Download;
