import { useState } from "react";
import Title from "../../components/Title";

import { useData } from "../../context/MainContext";

function Crew() {
  const [currentMember, setCurrentMember] = useState(0);
  const { data } = useData();

  const crewData = data.crew?.[currentMember];

  console.log(data.crew?.length);

  return (
    <div className=" bg-black text-white ">
      <Title>02 meet your crew</Title>

      <div className="flex gap-6 m-[12rem]">
        <div className="flex flex-col gap-6  p- 3">
          <h2 className="text-4xl font-bold">{crewData?.role}</h2>
          <h2 className="text-6xl font-bold">{crewData?.name}</h2>
          <p>{crewData?.bio}</p>
          <div className="flex gap-3 ml-3">
            {data.crew?.map((bg, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setCurrentMember(index);
                    }}
                    className={`h-6 w-6 rounded-full bg-transparent border-4 cursor-pointer ${
                      currentMember === index ? "bg-red-500" : ""
                    }`}
                  ></div>
                </>
              );
            })}
          </div>
        </div>

        <img src={`${crewData?.images.png}`} alt="" />
      </div>
    </div>
  );
}

export default Crew;
