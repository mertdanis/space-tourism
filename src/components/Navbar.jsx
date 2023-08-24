import { NavLink, Link } from "react-router-dom";

import { useData } from "../context/MainContext";

function Navbar() {
  const { pages } = useData();

  return (
    <div className="  h-1/6 flex justify-between pl-[5rem]  py-[6rem] items-center   ">
      <Link to="/home">
        <img
          className="cursor-pointer ml-6 h-[4rem]"
          src="public/imgs/shared\logo.svg"
          alt="Logo"
        />
      </Link>

      <nav className="border-b-4">
        <ul className="flex gap-6 text-white text-2xl mr-[10rem] ml-[10rem] ">
          {pages?.map((a, index) => {
            return (
              <NavLink
                key={index}
                to={a}
                className="transition duration-500 uppercase cursor-pointer hover:font-bold p-3 "
              >
                <div className="flex gap-3">
                  <p>0{index}</p>
                  <p>{a}</p>
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
