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

      <div className="flex gap-[10rem] sm:w-[55%] ">
        <div className="flex flex-col gap-6   mt-[10rem]">
          <h4 className="sm:text-h4 text-[16px] tracking-widest opacity-50 text-mainWhite uppercase">
            {crewData?.role}
          </h4>
          <h3 className="sm:text-h3 text-[24px] sm:mt-[15px] sm:mb-[27px] tracking-wide  uppercase">
            {crewData?.name}
          </h3>
          <p className="sm:text-body_text text-mainLight sm:w-[65%] text-[15px]">
            {crewData?.bio}
          </p>
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

        <img
          className="absolute bottom-0 right-[352px]"
          src={`${crewData?.images.png}`}
          alt={`${crewData?.name}`}
        />
      </div>
    </div>
  );
}

export default Crew;
