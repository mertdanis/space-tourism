import { useState } from "react";
import Title from "../../components/Title";

import { useData } from "../../context/MainContext";

function Crew() {
  const [currentMember, setCurrentMember] = useState(0);
  const { data } = useData();

  const crewData = data.crew?.[currentMember];

  return (
    <div className=" text-white sm:grid flex flex-col items-center justify-center ">
      <Title pageNumber={"02"}> meet your crew</Title>
      <img
        className="sm:hidden block  relative w-[177px h-[222px] my-[32px]  "
        src={`${crewData?.images.png}`}
        alt={`${crewData?.name}`}
      />
      <div className="flex gap-[10rem] sm:w-[55%] ">
        <div className="flex flex-col sm:items-start items-center gap-6   sm:mt-[10rem]">
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
                    className={`  h-5 w-5 rounded-full   cursor-pointer mt-[7rem] ${
                      currentMember === index ? "bg-white" : "bg-slate-700"
                    }`}
                  ></div>
                </>
              );
            })}
          </div>
        </div>
        {/* 
        <img
          className="absolute sm:bottom-0 sm:right-[352px] sm:top-auto top-0 sm:h-auto sm-w-auto h-[222px] w-[177px]   "
          src={`${crewData?.images.png}`}
          alt={`${crewData?.name}`}
        /> */}
      </div>
    </div>
  );
}

export default Crew;
