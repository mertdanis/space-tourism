import { useState } from "react";
import Title from "../../components/Title";

import { useData } from "../../context/MainContext";

function Technology() {
  const { data } = useData();

  const [step, setStep] = useState(0);

  const { technology } = data;

  const technologyContent = data.technology?.[step];

  return (
    <>
      <Title pageNumber={"03"}> space launch 101</Title>
      <div className="   text-white p-3 flex">
        <div className="flex gap-6   mt-[130px]">
          <ul className="flex flex-col gap-[32px] justify-center  ">
            {technology?.map((stepDiv, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setStep(index);
                    }}
                    className={`cursor-pointer  font-bold border-[1px]  h-[80px] w-[80px] mr-6 rounded-full flex justify-center items-center ${
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
          <div className="flex flex-col gap-6  p-6 ">
            <p className="text-nav_text uppercase text-mainLight tracking-[2.7px] font-thin">
              the terminology...
            </p>
            <h3 className="uppercase text-h3 tracking-widest  my-6">
              {technologyContent?.name}
            </h3>
            <p className="w-1/2 text-body_text text-mainLight">
              {technologyContent?.description}
            </p>
          </div>
        </div>
        <img
          className=" absolute right-0  "
          src={`${technologyContent?.images.portrait}`}
          alt=""
        />
      </div>
    </>
  );
}

export default Technology;
