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
      <div className="ml-10  grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-12">
        <div className="grid md:justify-items-start md:ml-10">
          <h2 className="vertical-text mb-8 text-5xl font-extrabold uppercase text-gray-200 md:mb-0 md:text-center md:text-8xl">
            facts
          </h2>
        </div>

        <div className="grid md:justify-items-center md:pr-36 text-base md:text-2xl">
          <div className="grid gap-x-8 md:gap-x-32 min-[320px]:grid-cols-[auto_1fr] min-[320px]:gap-y-4">
            <p className="font-bold min-[320px]:text-right">
              {labels.max_speed_lbl}
            </p>
            <p className={"text-left"}>{facts.max_speed}</p>
            <p className="font-bold min-[320px]:text-right">
              {labels.weight_lbl}
            </p>
            <p className={"text-left"}>{facts.weight}</p>
            <p className="font-bold min-[320px]:text-right">
              {labels.drive_type_lbl}
            </p>
            <p className={"text-left"}>{facts.drive_type}</p>
            <p className="font-bold min-[320px]:text-right">
              {labels.operation_time_lbl}
            </p>
            <p className={"text-left"}>{facts.operation_time}</p>
            <p className="font-bold min-[320px]:text-right">
              {labels.charging_speed_lbl}
            </p>
            <p className={"text-left"}>{facts.charging_speed}</p>
            <p className="font-bold min-[320px]:text-right">
              {labels.payload_lbl}
            </p>
            <p className={"text-left"}>{facts.payload}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export {AMRFacts}
