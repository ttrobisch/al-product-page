import React from "react";

type Props = {
    max_speed: string;
    weight: string;
    drive_type: string;
    charging_speed: string;
    payload: string;
};

function AMRFacts(props: Props) {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-12">
            <h2
                className="uppercase vertical-text text-5xl font-extrabold text-gray-200 mb-8 md:mb-0 md:text-center">facts</h2>
            <div className="grid items-center">
                <div className={"grid min-[320px]:grid-cols-[auto_1fr] gap-x-8 min-[320px]:gap-y-4"}>
                    <p className={"font-bold min-[320px]:text-right"}>Höchstgeschwindigkeit</p>
                    <p className={"text-left"}>{props.max_speed}</p>
                    <p className={"font-bold min-[320px]:text-right"}>Gewicht</p>
                    <p className={"text-left"}>{props.weight}</p>
                    <p className={"font-bold min-[320px]:text-right"}>Antriebsart</p>
                    <p className={"text-left"}>{props.drive_type}</p>
                    <p className={"font-bold min-[320px]:text-right"}>Ladegeschwindigkeit</p>
                    <p className={"text-left"}>{props.charging_speed}</p>
                    <p className={"font-bold min-[320px]:text-right"}>Traglast</p>
                    <p className={"text-left"}>{props.payload}</p>
                </div>
            </div>
        </div>
    </>
}

export {AMRFacts}