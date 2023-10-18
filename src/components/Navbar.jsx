import { Link, NavLink } from "react-router-dom";

import { useData } from "../context/MainContext";

import { useState } from "react";

function Navbar() {
  const { pages } = useData();

  const [openHamburger, setopenHamburger] = useState(false);

  console.log(openHamburger);

  return (
    <div className=" sm:h-1/6  flex justify-between sm:pl-[5rem]  sm:py-[6rem] sm:items-center py-[3rem]  ">
      <div
        className={`flex justify-between   w-full px-6 ${
          openHamburger ? "items-start" : "items-center"
        }`}
      >
        <Link to="/home">
          <svg
            className="cursor-pointer sm:ml-6 sm:h-[4rem] "
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>

        {openHamburger ? (
          <div className="absolute right-0 top-0 bg-black  sm:hidden h-screen z-10  p-2  text-mainWhite ">
            <div
              onClick={() => setopenHamburger(false)}
              className="absolute right-0 top-4 cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <rect
                  x="2.5752"
                  y="0.954102"
                  width="24"
                  height="3"
                  transform="rotate(45 2.5752 0.954102)"
                  fill="#D0D6F9"
                />
                <rect
                  x="0.454102"
                  y="17.9246"
                  width="24"
                  height="3"
                  transform="rotate(-45 0.454102 17.9246)"
                  fill="#D0D6F9"
                />
              </svg>
            </div>
            <nav className="flex mt-6">
              <ul className=" flex flex-col text-white sm:text-2xl text-[16px] mr-[10rem] ml-[10rem] ">
                {pages?.map((page, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={page}
                      className="transition duration-500 uppercase cursor-pointer hover:font-bold p-3 "
                    >
                      <div className="flex gap-3">
                        <p>0{index}</p>
                        <p>{page}</p>
                      </div>
                    </NavLink>
                  );
                })}
              </ul>
            </nav>
          </div>
        ) : (
          <svg
            onClick={() => setopenHamburger(true)}
            className="cursor-pointer  sm:hidden "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        )}
      </div>

      <nav className="border-b-4 hidden sm:block">
        <ul className="flex gap-6 text-white text-2xl mr-[10rem] ml-[10rem] ">
          {pages?.map((page, index) => {
            return (
              <NavLink
                key={index}
                to={page}
                className="transition duration-500 uppercase cursor-pointer hover:font-bold p-3 "
              >
                <div className="flex gap-3">
                  <p>0{index}</p>
                  <p>{page}</p>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
