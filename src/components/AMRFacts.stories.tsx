import React from 'react';
import {AMRFacts} from "./AMRFacts";
import "../lib/styles.css";

let facts = {
    max_speed: "1,6 m/s",
    weight: "32,7 kg",
    drive_type: "Vierbeinig",
    operation_time: "90 min",
    charging_speed: "1 h",
    payload: "14 kg"
}
let labels = {
    headline_facts: "facts",
    headline_usage: "usage",
    max_speed_lbl: "Höchstgeschwindigkeit",
    weight_lbl: "Gewicht",
    drive_type_lbl: "Antriebsart",
     operation_time_lbl: "Betriebszeit",
    charging_speed_lbl: "Ladegeschwindigkeit",
    payload_lbl: "Traglast"
}

export const World = () => <AMRFacts facts={facts} labels={labels} />;
