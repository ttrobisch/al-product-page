import React from "react";
import { ArrowUp45Icon, ArrowUpIcon } from "./icons";

type Props = {
    header: string;
    contact_label: string;
    contact_url: string;
    data_protection_label: string;
    data_protection_url: string;
    legal_notice_label: string;
    legal_notice_url: string;
    faq_label: string;
    faq_url: string;
    copyright: string;
    goto_top_label: string;
};

function Footer(props: Props) {
  return <>
    <div className="relative w-auto bg-[#414D56]  p-12 text-white">
      <h1 className="mt-16 text-3xl font-black">{props.header}</h1>
      <a className="mt-2 hover:text-blue-600" href={props.contact_url}>
        <span className="mr-2 text-base">{props.contact_label}</span>&nbsp;
        <ArrowUp45Icon></ArrowUp45Icon>
      </a>
      <nav className="mt-16">
        <a className="pr-5 hover:text-blue-600" href={props.data_protection_url}>
            {props.data_protection_label}
        </a>
        <a className="pr-5 hover:text-blue-600" href={props.legal_notice_url}>
            {props.legal_notice_label}
        </a>
        <a className="pr-5 hover:text-blue-600" href={props.faq_url}>
            {props.faq_label}
        </a>
      </nav>

      <p className="mt-5">{props.copyright}</p>
      <a className=" absolute bottom-4 right-28 font-semibold hover:text-blue-600" href="#top">
          {props.goto_top_label}
        <ArrowUpIcon className="ml-3"></ArrowUpIcon>
      </a>
    </div>
  </>
}

export { Footer };
