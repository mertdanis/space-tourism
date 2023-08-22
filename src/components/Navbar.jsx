import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="mt-6 h-1/6 flex justify-between pl-[5rem]  py-6 items-center   ">
      <img
        className="cursor-pointer ml-6"
        src="public/imgs/shared\logo.svg"
        alt="Logo"
      />
      <nav className="flex items-center justify-center bg-blue-500   p-6">
        <ul className="flex gap-6 text-white text-2xl mr-[20rem] ml-[10rem]">
          <li className="">
            <NavLink to="/">Homepage</NavLink>
          </li>

          <li>
            <NavLink to="/destinations">Destination</NavLink>
          </li>

          <li>
            <NavLink to="/crew">Crew</NavLink>
          </li>

          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
