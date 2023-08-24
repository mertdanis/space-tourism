import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="  text-white bg-cover flex flex-col mt-[10rem]  ">
      <div className=" flex items-center justify-center ">
        <div className="flex flex-col   ">
          <div className="flex flex-col  uppercase ">
            <p className="tracking-[.2em]">so, you want to travel to</p>
            <h1 className="text-[10rem] inline-block my-[6rem] ">space</h1>
          </div>
          <p className="w-1/2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destinations">
          <div className="  mt-[5rem] duration-300  hover:bg-black hover:text-white   h-72 w-72 ml-auto  transition hover:-translate-y-2 rounded-full border cursor-pointer bg-white text-black flex items-center justify-center uppercase ">
            <span className="p-6 text-4xl tracking-[.2em]  ">Explore</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
