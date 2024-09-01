import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Divider from "@mui/material/Divider";
import { userDeleteAccount, userLogout } from "../../redux/slice/authUsers";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProfileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  console.log(users);
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      console.log("logout please...");
      const result = await dispatch(userLogout()).unwrap(); // Unwrap to handle promise
      console.log('SignUp successful:', result);
   
      toast.success(result.message);
      navigate('/');
  } catch (err) {
      if (err && err.message) {
        toast.error(`Signup failed: ${err.message}`);
      } else {
        toast.error('Signup failed. Please try again.');
      }
    
  }
  }

  const handleDelete = async () => {

    try {
      console.log("delete account please...");
      const result = await dispatch(userDeleteAccount()).unwrap(); // Unwrap to handle promise
      console.log('delete account successful:', result);
   
      toast.success(result.message);
      navigate('/');
  } catch (err) {
      if (err && err.message) {
        toast.error(`delete account failed: ${err.message}`);
      } else {
        toast.error('delete account failed. Please try again.');
      }
    
  }
  }


  return (
    <div className="bg-black w-48 absolute top-16 right-5 py-5 flex-col border-2 border-gray-800 z-50">
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

        <p className="hover:underline text-white" onClick={handleLogout}>Sign out of Netflix</p>
        <p className="hover:underline text-white" onClick={handleDelete}>Delete Netflix Account</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
