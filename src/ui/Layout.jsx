import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Title from "../components/Title";

function Layout() {
  const currentPage = useLocation();
  const pageInfo = currentPage.pathname;

  const test = pageInfo.replace("/", "");

  const bg = `${test}`;

  return (
    <div className={`grid grid-cols-6 h-screen w-full bg-black text-white `}>
      <header className="col-span-full	">
        <Navbar />
      </header>

      <main className=" text-white text-2xl col-start-2 col-end-7	">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
