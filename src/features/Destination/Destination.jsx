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
      <Title pageNumber={"01"}> pick your destination</Title>
      <div className="   text-white  ml-[6rem] ">
        <div className="flex gap-[10rem]   ">
          <img
            className="h-full mt-[5rem] cursor-pointer hover:-translate-y-6 transition duration-500 "
            src={`${currentDestination?.images.png}`}
            alt={currentDestination?.name}
            title={`${currentDestination?.name}`}
          />

          <div className="flex flex-col gap-6  ml-[5rem]">
            <ul className="flex gap-6 uppercase text-xl">
              {destinations?.map((title, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer hover:border-b-4 ${
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

            <h2 className="uppercase text-[120px] my-[3rem] tracking-wide">
              {currentDestination?.name}
            </h2>
            <p className="text-xl mb-6 opacity-70">
              {" "}
              {currentDestination?.description}
            </p>
            <div className=" border-t-2  flex justify-between gap-3 p-3 text-white  uppercase">
              <div className="mt-6 flex flex-col gap-3">
                <p className="opacity-50">avg. distance</p>
                <p className="tracking-widest">
                  {currentDestination?.distance}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <p className="opacity-50">est. travel time</p>
                <p className="tracking-widest">{currentDestination?.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Destination };
