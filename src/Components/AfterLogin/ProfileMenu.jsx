import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Divider from "@mui/material/Divider";

const ProfileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-48 absolute top-16 right-5 py-5 flex-col border-2 border-gray-800 z-index:100">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white grid grid-cols-[20%_auto]">
          <div className="">
            <ModeEditOutlineOutlinedIcon className="mb-5 text-[#9c9c9c]" />
            <PersonPinOutlinedIcon className="mb-5 text-[#9c9c9c]" />
            <PersonOutlineOutlinedIcon className="mb-5 text-[#9c9c9c]" />
            <HelpOutlineOutlinedIcon className="mb-5 text-[#9c9c9c]" />
          </div>
          <div className="z-index:100">
            <ul>
              <li className="hover:underline mx-2 text-[15px] text-left">
                Manage Profiles
              </li>
              <li className="hover:underline mx-2 my-6 text-[15px] text-left">
                Transfer Profile
              </li>
              <li className="hover:underline mx-2 my-6 text-[15px] text-left">
                Account
              </li>
              <li className="hover:underline mx-2 text-[15px] text-left">
                Help Center
              </li>
            </ul>
          </div>
        </div>

        <Divider />

        <hr />

        <p className="hover:underline text-white">Sign out of Netflix</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
