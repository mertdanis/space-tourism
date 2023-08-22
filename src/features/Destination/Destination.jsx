import { useData } from "../../context/MainContext";

import Title from "../../components/Title";

import { useState } from "react";

function Destination() {
  const { data } = useData();

  const [index, setIndex] = useState(0);

  const { destinations } = data;

  console.log(index);

  const currentDestination = destinations?.[index];

  return (
    <div className="  bg-black text-white  ">
      <div className="flex gap-[10rem] pl-[15rem]">
        <div className="flex flex-col gap-6">
          <Title>01 pick your destination</Title>
          <img src={`${currentDestination?.images.png}`} alt="" />
        </div>

        <div className="flex flex-col">
          <ul className="flex gap-3 uppercase">
            {destinations?.map((title, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => {
                    setIndex(index);
                  }}
                >
                  {title.name}
                </li>
              );
            })}
          </ul>

          <h2 className="uppercase text-6xl"> {currentDestination?.name}</h2>
          <p className="text-2xl"> {currentDestination?.description}</p>
          <div className="flex justify-between gap-3 p-3 text-white bg-black">
            <p>{currentDestination?.distance}</p>
            <p>{currentDestination?.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Destination };
