import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="  text-white bg-cover bg-black  flex flex-col mt-[160px]  ">
        <div className=" sm:flex sm:my-0 my-[50px]  sm:items-center ">
          <div className="flex flex-col  sm:items-start items-center   ">
            <div className="flex flex-col   uppercase ">
              <p className="tracking-[4.725px] sm:text-h5 text-[16px] text-mainLight">
                so, you want to travel to
              </p>
              <h1 className="sm:text-h1 text-[80px]  sm:my-[80px] my-[15px]  ">
                space
              </h1>
            </div>
            <p className="sm:w-1/2  text-body_text text-mainLight">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <Link to="/destinations">
            <div className="  mt-[5rem] duration-300 text-mainDark  hover:bg-black hover:text-white h-[150px] w-[150px]  sm:h-72 sm:w-72 sm:ml-auto  transition hover:-translate-y-2 rounded-full border cursor-pointer bg-white  flex items-center justify-center uppercase ">
              <span className="p-6 text-h4  tracking-[2px]  ">Explore</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
