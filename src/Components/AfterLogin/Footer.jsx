import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="bg-black py-[100px]">
      <div className="max-w-[1170px] mx-auto px-[15px] items-center pl-5">
        <a href="https://www.facebook.com/NetflixIN" target="_blank">
          <FacebookIcon className="text-white cursor-pointer" />
        </a>

        <a href="https://www.instagram.com/Netflix_IN/" target="_blank">
          <InstagramIcon className="text-white mx-[30px] cursor-pointer" />
        </a>

        <a href="https://twitter.com/netflixindia" target="_blank">
          <TwitterIcon className="text-white mr-[30px] cursor-pointer" />
        </a>

        <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target="_blank">
          <YouTubeIcon className="text-white cursor-pointer" />
        </a>

        <div className="py-[30px] grid md:grid-cols-4 grid-cols-2 text-[#626262] ">
          <div>
            <ul>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Audio Description</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Investor Relations</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Legal notices</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Help Center</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Jobs</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Cookie Preferences</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Gift Cards</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Terms of Use</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Corporate Information</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Media Centre</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Privacy</a>
              </li>
              <li className="mb-[10px] hover:underline cursor-pointer">
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button className="bg-black text-[13px] border-[2px] p-[5px_10px]  border-[rgba(255,255,255,0.3)] text-[#626262]">
            Service Code
          </button>
        </div>

        <div className="text-[#626262] text-[11px] mt-[20px]">
          © 2024 Netflix Clone
        </div>
      </div>
    </div>
  );
};

export default Footer;
