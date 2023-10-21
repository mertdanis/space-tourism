import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const pageInfo = useLocation();

  const currentPage = pageInfo.pathname;

  console.log(currentPage);

  return (
    <div
      className={`grid sm:grid-cols-7 grid-cols-1 sm:grid-rows-4 gird-rows-1 h-screen w-screen text-center sm:text-start    bg-cover text-white ${
        currentPage === "/home" ? "sm:bg-home bg-homeMobile" : ""
      }
      ${currentPage === "/" ? "sm:bg-home bg-homeMobile" : ""}
      ${
        currentPage === "/destinations"
          ? "sm:bg-destinations bg-destinationsMobile"
          : ""
      }
      ${currentPage === "/crew" ? "sm:bg-crew bg-crewMobile" : ""}
      ${
        currentPage === "/technology"
          ? "sm:bg-technology bg-technologyMobile"
          : ""
      }
      `}
    >
      <header className="sm:col-span-full sm:row-span-1  	">
        <Navbar />
      </header>

      <main className="sm:grid flex flex-col items-center text-white text-2xl   sm:col-start-2 sm:col-end-7	">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
