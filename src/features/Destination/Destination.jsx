import { useData } from "../../context/MainContext";

import Title from "../../components/Title";

import { useState } from "react";

function Destination() {
  const { data } = useData();

  const [content, setContent] = useState(0);

  const { destinations } = data;

  const currentDestination = destinations?.[content];

  return (
    <>
      <Title className={"mb-[64px]"} pageNumber={"01"}>
        {" "}
        pick your destination
      </Title>
      <div className="   text-white  sm:ml-[6rem]  ">
        <div className="flex-col sm:flex gap-[10rem]   ">
          <img
            className="sm:h-full h-[259px]  mt-[64px] cursor-pointer hover:-translate-y-6 transition duration-500 "
            src={`${currentDestination?.images.png}`}
            alt={currentDestination?.name}
            title={`${currentDestination?.name}`}
          />

          <div className="flex flex-col items-center gap-6  sm:ml-[5rem]">
            <ul className="flex gap-6 uppercase text-xl">
              {destinations?.map((title, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer hover:border-b-4 text-[14px] ${
                      content === index ? "border-b-4 " : ""
                    }`}
                    onClick={() => {
                      setContent(index);
                    }}
                  >
                    {title.name}
                  </li>
                );
              })}
            </ul>

            <h2 className="uppercase sm:text-h2 text-h3 my-[3rem] tracking-wide">
              {currentDestination?.name}
            </h2>
            <p className="sm:text-body_text text-[15px] sm:w-full w-[80vw] mb-6  text-mainLight">
              {currentDestination?.description}
            </p>
            <div className=" border-t-2 border-[#383B4B]  sm:flex flex-col justify-between gap-3 p-3 text-white  uppercase">
              <div className="mt-6 flex flex-col gap-3">
                <p className="opacity-50">avg. distance</p>
                <h5 className="text-h5">{currentDestination?.distance}</h5>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <p className="opacity-50">est. travel time</p>
                <h5 className="text-h5">{currentDestination?.travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Destination };
