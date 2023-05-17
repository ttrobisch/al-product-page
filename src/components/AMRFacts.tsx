import React from "react";

type Props = {
  facts: {
    max_speed: string;
    weight: string;
    drive_type: string;
    operation_time: string;
    charging_speed: string;
    payload: string;
  };
  labels: {
    headline_facts: string;
    headline_usage: string;
    max_speed_lbl: string;
    weight_lbl: string;
    drive_type_lbl: string;
    operation_time_lbl: string;
    charging_speed_lbl: string;
    payload_lbl: string;
  };
};

function AMRFacts({ labels, facts }: Props) {
  return (
    <>
      <div className="ml-4 grid grid-cols-1 md:gap-12  xl:ml-10 ">
        <div className="grid justify-items-start px-4 md:ml-10 xl:absolute">
          <h2 className="vertical-text mb-8 text-5xl font-extrabold uppercase text-gray-200 md:mb-0 md:text-center md:text-8xl">facts</h2>
        </div>

        <div className=" grid w-full px-4  text-base md:justify-items-center md:text-2xl ">
          <div className="grid gap-x-5 justify-self-center min-[450px]:grid-cols-2 min-[450px]:gap-y-4 md:gap-x-24">
            <p className="font-bold min-[450px]:text-right">{labels.max_speed_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.max_speed}</p>
            <p className="font-bold min-[450px]:text-right">{labels.weight_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.weight}</p>
            <p className="font-bold min-[450px]:text-right">{labels.drive_type_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.drive_type}</p>
            <p className="font-bold min-[450px]:text-right">{labels.operation_time_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.operation_time}</p>
            <p className="font-bold min-[450px]:text-right">{labels.charging_speed_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.charging_speed}</p>
            <p className="font-bold min-[450px]:text-right">{labels.payload_lbl}</p>
            <p className={"mb-3 text-left min-[450px]:mb-0"}>{facts.payload}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { AMRFacts };
