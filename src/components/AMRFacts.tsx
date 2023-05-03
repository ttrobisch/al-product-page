import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  max_speed: string;
  weight: string;
  drive_type: string;
  charging_speed: string;
  payload: string;
};

function AMRFacts(props: Props) {
  return<>
    <div className="flex flex-col ml-10 mt-16 mb-16 sm:flex-row justify-start">
        <h2 className="uppercase text-5xl font-extrabold text-gray-200 rotate-0 sm:-rotate-90 mb-6 sm:mb-0">facts</h2>
      <div className={"flex flex-col space-y-3"}>
        <div className={"flex flex-row justify-between gap-8"}>
          <p className={"font-bold text-right"}>Höchstgeschwindigkeit</p>
          <p className={"text-left"}>{props.max_speed}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <p className={"font-bold text-right"}>Gewicht</p>
          <p className={"text-left"}>{props.weight}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <p className={"font-bold text-right"}>Antriebsart</p>
          <p className={"text-left"}>{props.drive_type}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <p className={"font-bold text-right"}>Ladegeschwindigkeit</p>
          <p className={"text-left"}>{props.charging_speed}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <p className={"font-bold text-right"}>Traglast</p>
          <p className={"text-left"}>{props.payload}</p>
        </div>
      </div>
    </div>
    </>
}
export{AMRFacts}