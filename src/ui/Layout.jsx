import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const pageInfo = useLocation();

  const currentPage = pageInfo.pathname;

  console.log(currentPage);

  return (
    <div
      className={`grid sm:grid-cols-7 grid-cols-1 sm:grid-rows-4 gird-rows-1 h-screen w-screen   bg-cover text-white ${
        currentPage === "/home" ? "bg-home" : ""
      }
      ${currentPage === "/" ? "bg-home" : ""}
      ${currentPage === "/destinations" ? "bg-destinations" : ""}
      ${currentPage === "/crew" ? "bg-crew" : ""}
      ${currentPage === "/technology" ? "bg-technology" : ""}
      `}
    >
      <header className="col-span-full row-span-1	">
        <Navbar />
      </header>

      <main className=" text-white text-2xl  sm:col-start-2 sm:col-end-7	">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
