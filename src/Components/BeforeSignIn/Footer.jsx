import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[60px] py-[50px] ">
      <div className="max-w-[1170px] mx-auto px-[15px] items-center pl-5">
        <h3 className="text-[#848484] text-[18px]">
          Questions? Call{" "}
          <a className="underline" href="tel: 000-800-919-1694">
            000-800-919-1694
          </a>
        </h3>

        <div className="py-[30px] grid md:grid-cols-4 grid-cols-2 text-[#848484] underline">
          <div>
            <ul>
              <li className="mb-[10px]">
                <a>FAQ</a>
              </li>
              <li className="mb-[10px]">
                <a>Investor Relations</a>
              </li>
              <li className="mb-[10px]">
                <a>Privacy</a>
              </li>
              <li className="mb-[10px]">
                <a>Speed Test</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px]">
                <a>Help Center</a>
              </li>
              <li className="mb-[10px]">
                <a>Jobs</a>
              </li>
              <li className="mb-[10px]">
                <a>Cookie Preferences</a>
              </li>
              <li className="mb-[10px]">
                <a>Legal Notices</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px]">
                <a>Account</a>
              </li>
              <li className="mb-[10px]">
                <a>Ways to Watch</a>
              </li>
              <li className="mb-[10px]">
                <a>Corporate Information</a>
              </li>
              <li className="mb-[10px]">
                <a>Only on Netflix</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="mb-[10px]">
                <a>Media Centre</a>
              </li>
              <li className="mb-[10px]">
                <a>Terms of Use</a>
              </li>
              <li className="mb-[10px]">
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
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
              className="bg-black text-white border-[2px] sm:p-[10px_30px] p-[5px_20px] rounded-lg border-[rgba(255,255,255,0.3)]"
            >
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>

          <h3 className="text-[#848484] mt-5">Netflix India</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
