import * as React from "react";
import { Footer } from "./Footer";
import "../lib/styles.css";

let props = {
    header: "Unleash the Power of Automation.",
    contact_label: "Get in Contact now!",
    contact_url: "/contact",
    data_protection_label:"",
    data_protection_url:"",
    legal_notice_label: "Imprint",
    legal_notice_url: "https://www.t-systems.com/de/en/imprint",
    faq_label:"",
    faq_url:"",
    copyright: "© 2023 Autonomous Logistics.",
    goto_top_label: "Back to the top",
};

const placeholder = "placeholder";

export const World = () => <Footer {...props}/>;
