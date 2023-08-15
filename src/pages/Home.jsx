import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="w-screen h-screen bg-home-background bg-cover flex flex-col   ">
      <Navbar />

      <div className=" flex items-center justify-center mt-[15rem] pl-[10rem]">
        <div className="flex flex-col gap-6  basis-4/12 ">
          <div className="flex flex-col  uppercase tracking-widest">
            <p>so, you want to travel to</p>
            <h1 className="text-[10rem] inline-block my-[5rem]">space</h1>
          </div>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="h-72 w-72 ml-auto mr-[15rem] transition hover:-translate-y-2 rounded-full border cursor-pointer bg-white text-black flex items-center justify-center uppercase ">
          <span className="p-6 tracking-widest font-semibold">
            <Link to="/destination">Explore</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
