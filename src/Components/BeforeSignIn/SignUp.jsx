import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from "../../redux/slice/authUsers";
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

  const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);
    console.log(users);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSignup = async () => {

    try {
      const result = await dispatch(userSignup({firstname, lastname, email, password})).unwrap(); // Unwrap to handle promise
      console.log('SignUp successful:', result);
   
      setFirstName('');
      setLastName('');
      setEmail('');
      setpassword('');
      toast.success(result.message);
  } catch (err) {
      if (err && err.message) {
        toast.error(`Signup failed: ${err.message}`);
      } else {
        toast.error('Signup failed. Please try again.');
      }
      setFirstName('');
      setLastName('');
      setEmail('');
      setpassword('');
  }
  }

  return (
    <div className="w-full md:bg-[url('image/BannerPage.jpg')] bg-black bg-center bg-cover">
      <div className="w-full bg-[rgba(0,0,0,0.5)]">
        <header className="max-w-[1170px] md:mx-[100px] ">
          <div className="items-center">
            <div>
              <img
                src="image/Netflix_Logo.png"
                alt="logo_img"
                className="md:w-[200px] md:h-[80px] w-[120px] h-[60px]"
              />
            </div>
          </div>
        </header>

        <div className="flex justify-center mb-[60px]">
          <div className="w-[450px] h-[707px] md:bg-[rgba(0,0,0,0.7)] py-[48px] px-[68px]">
            <div>
              <h1 className="text-white font-bold text-[35px] mb-7">Sign In</h1>
            </div>

            <div className="flex flex-col gap-5 w-[314px]">
              {/* <form action="#" className="flex flex-col gap-5 w-[314px]"> */}
              <input
                  type="text"
                  className="rounded text-white border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.3)] h-12 pl-3 py-6"
                  placeholder="firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                  <input
                  type="text"
                  className="rounded text-white border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.3)] h-12 pl-3 py-6"
                  placeholder="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  className="rounded text-white border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.3)] h-12 pl-3 py-6"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="rounded text-white border-[#ccc] bg-[rgba(0,0,0,0.4)] border-2 border-[rgba(255,255,255,0.3)] h-12 pl-3 py-6 "
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <Link
                  to=""
                  onClick={handleSignup}
                  className="bg-[red] text-white rounded text-lg font-semibold py-[10px] hover:bg-[rgb(229,9,20)] duration-300 text-center"
                >
                  <button>Sign Up</button>
                </Link>
              {/* </form> */}
              <p className="text-[#9b9b9b] text-center py-4 text-[17px] cursor-pointer hover:underline">
                Forgot password?
              </p>

              <div className=" mt-14">
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Checkbox defaultChecked color="default" />
                  <label className="text-sm -ml-3 text-[#9b9b9b]">
                    Remember me
                  </label>
                </Box>
              </div>

              <p className="mt-4 text-[rgba(255,255,255,0.7)] text-lg">
                already have an account?{" "}
                <Link to="/signin">
                  <button className="font-bold text-white">Login now.</button>
                </Link>
              </p>

              <p className="text-[12px] text-[rgba(255,255,255,0.7)] pt-4">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="#" className="text-[blue]">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full md:bg-[rgba(0,0,0,0.7)] py-[72px] md:px-[106px] px-[30px]">
          <h3 className="text-[#848484] text-[18px]">
            Questions? Call{" "}
            <a className="hover:underline" href="tel: 000-800-919-1694">
              000-800-919-1694
            </a>
          </h3>

          <div className="py-[30px] grid md:grid-cols-4 grid-cols-2 text-[#848484] ">
            <div>
              <ul>
                <li className="mb-[20px] hover:underline">
                  <a>FAQ</a>
                </li>
                <li className="mb-[10px] mr-[15px] hover:underline">
                  <a>Cookie Preferences</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-[20px] hover:underline">
                  <a>Help Center</a>
                </li>
                <li className="mb-[10px] hover:underline">
                  <a>Corporate Information</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-[20px] hover:underline">
                  <a>Terms of Use</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-[20px] hover:underline">
                  <a>Privacy</a>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                  fill="currentColor"
                ></path>
              </svg>
              <select
                name=""
                id=""
                className="bg-black text-[#848484] border-[2px] sm:p-[10px_30px] p-[5px_20px] rounded-lg border-[rgba(255,255,255,0.3)]"
              >
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
