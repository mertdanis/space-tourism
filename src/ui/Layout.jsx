import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      className={`grid grid-cols-7 grid-rows-4 h-screen w-full bg-destinations  bg-cover text-white `}
    >
      <header className="col-span-full row-span-1	">
        <Navbar />
      </header>

      <main className=" text-white text-2xl  col-start-2 col-end-7	">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
