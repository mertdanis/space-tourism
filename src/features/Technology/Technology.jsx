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
      <Title>03 space launch 101</Title>
      <div className=" bg-black text-white p-3 flex">
        <div className="flex gap-6 mx-[10rem] my-[15rem] w-1/2">
          <ul className="flex flex-col gap-6 justify-center ">
            {technology?.map((stepDiv, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setStep(index);
                    }}
                    className={`cursor-pointer text-black   h-24 w-24 bg-white rounded-full flex justify-center items-center ${
                      step === index ? "bg-red-500" : ""
                    }`}
                  >
                    <p>{index}</p>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="flex flex-col gap-6  p-6 ">
            <p className="uppercase tracking-widest font-thin">
              the terminology...
            </p>
            <h2 className="uppercase text-6xl tracking-widest">
              {technologyContent?.name}
            </h2>
            <p>{technologyContent?.description}</p>
          </div>
        </div>
        <img
          className="m-auto   w-1/4"
          src={`${technologyContent?.images.portrait}`}
          alt=""
        />
      </div>
    </>
  );
}

export default Technology;
