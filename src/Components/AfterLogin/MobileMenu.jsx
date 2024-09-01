import React from "react";

const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 z-50 absolute top-16 left-8 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white">
            <ul>
                <li className="hover:underline m-6 text-[14px]">Home</li>
                <li className="hover:underline m-6 text-[14px]">Tv Shows</li>
                <li className="hover:underline m-6 text-[14px]">Movies</li>
                <li className="hover:underline m-6 text-[14px]">New & Popular</li>
                <li className="hover:underline m-6 text-[14px]">My List</li>
                <li className="hover:underline m-6 text-[14px]">Browse by Languages</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
