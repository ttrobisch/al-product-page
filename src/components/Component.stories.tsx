import * as React from "react";
import { Footer } from "./Footer";

type Props = {
  data: {
    headline: string;
    introduction_text: string;
    background_image_url: string;
    background_image_alt: string;

    trial_kit_url: string;
    trial_kit_label: string;
    trial_kit_description: string;

    contact_url: string;
    contact_label: string;
    contact_description: string;

    mail_address: string;
    mail_subject: string;
    mail_body: string;

    legal_notice_url: string;
    legal_notice_label: string;

    page_title: string;
    page_description: string;

    logo_url: string;
    logo_alt: string;
    bulletpoints: { text: string }[];
  };
};

const placeholder = "placeholder";

export function FooterBlock({ data }: Props) {
  return <Footer></Footer>;
}

export function Test() {
  return <div>Test</div>;
}

export const World = () => <p>Hey!</p>;
