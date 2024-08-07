import React from "react";
import { Link } from "react-router-dom";
import EnjoyTv from "./EnjoyTv";
import Download from "./Download";
import Watch from "./Watch";
import Children from "./Children";
import Askquestion from "./Askquestion";
import Footer from "./Footer";

const Banner = () => {

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  return (
    <>
      <div className="w-full bg-[url('image/BannerPage.jpg')] bg-center bg-cover">
        <div className="w-full bg-[rgba(0,0,0,0.5)]">
          <header className="max-w-[1170px] mx-auto ">
            <div className="grid  s:grid-cols-[30%_auto] grid-cols-1 items-center">
              <div>
                <img
                  src="image/Netflix_Logo.png"
                  alt="logo_img"
                  className="w-[140px] h-[100px]"
                />
              </div>
              <div className="flex justify-end gap-10">
                <div className="relative">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="default-ltr-cache-4z3qvp e1svuwfo1 text-white absolute top-[15px] left-2"
                    data-name="Languages"
                    aria-hidden="true"
                  >
                    <path
                      // fill-rule="evenodd"
                      // clip-rule="evenodd"
                      d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <select
                    name=""
                    id=""
                    className="bg-black text-white border-[2px] sm:p-[10px_30px] p-[10px_20px] rounded-lg border-[rgba(255,255,255,0.3)]  google_translate_element"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>
                </div>
                

                <Link
                  to="/signin"
                  className="text-white bg-[red] hover:bg-[rgb(193,17,25)] rounded sm:px-[14px] px-[5px] py-[10px] font-bold"
                >
                  <button>Sign In</button>
                </Link>
              </div>
            </div>
          </header>

          <div className="max-w-[1170] mx-5 text-center sm:py-40 py-20 text-white">
            <h1 className="sm:text-[50px] text-[35px] font-bold">
              Unlimited movies, TV shows and more
            </h1>

            <h4 className="text-[30px] py-[20px]">
              Watch anywhere. Cancel anytime.
            </h4>
            <p className="text-[20px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="max-w-[700px] mx-auto mt-8 sm:px-[10px] px-[40px]">
              <form
                action=""
                className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-3"
              >
                <input
                  type="text"
                  className="rounded border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.5)] h-12 pl-3 py-8"
                  placeholder="Email Address"
                />

                <Link
                  to="/home"
                  className="bg-[red] rounded text-xl font-bold py-[18px] hover:bg-[rgb(193,17,25)] duration-300"
                >
                  <button>
                    Get Started
                    <i className="fa-solid fa-chevron-right pl-3"></i>
                  </button>
                </Link>

              </form>
            </div>
          </div>
        </div>
      </div>
      <EnjoyTv />
      <Download />
      <Watch />
      <Children />
      <Askquestion />
      <Footer />
    </>
  );
};

export default Banner;
