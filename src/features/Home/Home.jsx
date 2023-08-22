import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-black text-white bg-cover flex flex-col   ">
      <div className=" flex items-center justify-center ">
        <div className="flex flex-col gap-6 w-1/2  ">
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

        <Link to="/destinations">
          <div className=" transition duration-300  hover:bg-black hover:text-white active:translate-y-2  h-72 w-72 ml-auto  transition hover:-translate-y-2 rounded-full border cursor-pointer bg-white text-black flex items-center justify-center uppercase ">
            <span className="p-6 tracking-widest font-semibold ">Explore</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
