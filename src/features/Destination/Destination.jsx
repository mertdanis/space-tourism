import { useData } from "../../context/MainContext";

import Title from "../../components/Title";

import { useState } from "react";

function Destination() {
  const { data } = useData();

  const [content, setContent] = useState(0);

  const { destinations } = data;

  const currentDestination = destinations?.[content];

  return (
    <div className="  bg-black text-white  ">
      <Title>01 pick your destination</Title>
      <div className="flex gap-[5rem] pl-[5rem] mt-6 ">
        <img
          className="w-[70rem]"
          src={`${currentDestination?.images.png}`}
          alt={currentDestination?.name}
        />

        <div className="flex flex-col gap-6  ml-[5rem]">
          <ul className="flex gap-6 uppercase">
            {destinations?.map((title, index) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer hover:border-b-4 ${
                    content === index ? "border-b-4" : ""
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

          <h2 className="uppercase text-8xl my-6 tracking-widest">
            {currentDestination?.name}
          </h2>
          <p className="text-2xl mb-6"> {currentDestination?.description}</p>
          <div className=" border-t-2  flex justify-between gap-3 p-3 text-white bg-black uppercase">
            <div className="mt-6">
              <p>avg. distance</p>
              <p>{currentDestination?.distance}</p>
            </div>
            <div className="mt-6">
              <p>est. travel time</p>
              <p>{currentDestination?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Destination };
