import { useState } from "react";
import Title from "../../components/Title";

import { useData } from "../../context/MainContext";

function Technology() {
  const { data } = useData();

  const [step, setStep] = useState(0);

  const { technology } = data;

  const technologyContent = data.technology?.[step];

  console.log(technologyContent);

  return (
    <>
      <Title pageNumber={"03"}> space launch 101</Title>
      <img
        className="sm:hidden block my-[20px]"
        src={`${technologyContent?.images.landscape}`}
      />
      <div className="   text-white p-3 flex">
        <div className="sm:flex sm:flex-row flex flex-col    sm:mt-[130px]">
          <ul className="sm:flex sm:flex-col flex flex-row gap-[32px] justify-center  ">
            {technology?.map((stepDiv, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setStep(index);
                    }}
                    className={`cursor-pointer  font-bold border-[1px]  sm:h-[80px] sm:w-[80px] w-[40px] h-[40px] sm:mr-6 rounded-full flex justify-center items-center ${
                      step === index
                        ? "bg-white text-mainDark"
                        : "bg-transparent"
                    }`}
                  >
                    <p>{index}</p>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="flex flex-col sm:gap-6  p-6 sm:items-start items-center ">
            <p className="sm:text-nav_text text-[14px] uppercase text-mainLight tracking-[2.7px] font-thin">
              the terminology...
            </p>
            <h3 className="uppercase sm:text-h3 text-[24px] tracking-widest  my-6">
              {technologyContent?.name}
            </h3>
            <p className="sm:w-1/2  sm:text-body_text text-[15px] text-mainLight">
              {technologyContent?.description}
            </p>
          </div>
        </div>
        <img
          className=" absolute right-0 sm:block hidden "
          src={`${technologyContent?.images.portrait}`}
          alt=""
        />
      </div>
    </>
  );
}

export default Technology;
