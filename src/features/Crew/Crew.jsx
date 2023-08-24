import { useState } from "react";
import Title from "../../components/Title";

import { useData } from "../../context/MainContext";

function Crew() {
  const [currentMember, setCurrentMember] = useState(0);
  const { data } = useData();

  const crewData = data.crew?.[currentMember];

  return (
    <div className=" text-white ">
      <Title pageNumber={"02"}> meet your crew</Title>

      <div className="flex gap-[10rem] ">
        <div className="flex flex-col gap-6   mt-[10rem]">
          <h2 className="text-2xl tracking-widest opacity-60 uppercase">
            {crewData?.role}
          </h2>
          <h2 className="text-6xl tracking-wide mb-4 uppercase">
            {crewData?.name}
          </h2>
          <p>{crewData?.bio}</p>
          <div className="flex gap-5 ">
            {data.crew?.map((bg, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setCurrentMember(index);
                    }}
                    className={`h-5 w-5 rounded-full   cursor-pointer mt-[7rem] ${
                      currentMember === index ? "bg-white" : "bg-slate-700"
                    }`}
                  ></div>
                </>
              );
            })}
          </div>
        </div>

        <img src={`${crewData?.images.png}`} alt={`${crewData?.name}`} />
      </div>
    </div>
  );
}

export default Crew;
