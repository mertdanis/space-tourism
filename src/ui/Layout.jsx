import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const pageInfo = useLocation();

  const currentPage = pageInfo.pathname;

  console.log(currentPage);

  return (
    <div
      className={`grid grid-cols-7 grid-rows-4 h-screen w-full bg-destinations  bg-cover text-white ${
        currentPage === "/home" ? "bg-home" : ""
      }
      ${currentPage === "/crew" ? "bg-crew" : ""}
      ${currentPage === "/technology" ? "bg-technology" : ""}
      `}
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
