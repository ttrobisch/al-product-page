import React from "react";

type Props = {
    facts: {
        max_speed: string;
        weight: string;
        drive_type: string;
        charging_speed: string;
        payload: string;
      };
    labels: {
        headline_facts: string;
        headline_usage: string;
        max_speed_lbl: string;
        weight_lbl: string;
        drive_type_lbl: string;
        charging_speed_lbl: string;
        payload_lbl: string;
    };
};

function AMRFacts (props: Props) {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-12">
            <h2
                className="uppercase vertical-text text-5xl font-extrabold text-gray-200 mb-8 md:mb-0 md:text-center">facts</h2>
            <div className="grid items-center">
                <div className={"grid min-[320px]:grid-cols-[auto_1fr] gap-x-8 min-[320px]:gap-y-4"}>
                    <p className={"font-bold min-[320px]:text-right"}>{props.labels.max_speed_lbl}</p>
                    <p className={"text-left"}>{props.facts.max_speed}</p>
                    <p className={"font-bold min-[320px]:text-right"}>{props.labels.weight_lbl}</p>
                    <p className={"text-left"}>{props.facts.weight}</p>
                    <p className={"font-bold min-[320px]:text-right"}>{props.labels.drive_type_lbl}</p>
                    <p className={"text-left"}>{props.facts.drive_type}</p>
                    <p className={"font-bold min-[320px]:text-right"}>{props.labels.charging_speed_lbl}</p>
                    <p className={"text-left"}>{props.facts.charging_speed}</p>
                    <p className={"font-bold min-[320px]:text-right"}>{props.labels.payload_lbl}</p>
                    <p className={"text-left"}>{props.facts.payload}</p>
                </div>
            </div>
        </div>
    </>
}

export {AMRFacts}
