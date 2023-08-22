import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const currentPage = useLocation();
  const pageInfo = currentPage.pathname;

  const test = pageInfo.replace("/", "");

  return (
    <div className={`h-screen  bg-${test} bg-no-repeat bg-contain`}>
      <Navbar />
      <main className=" text-white text-2xl">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
