import React, { useEffect } from "react";
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative w-auto bg-darkblue  px-4 py-6 text-white md:p-12">
        <h1 className=" text-lg font-black sm:mt-8 sm:text-3xl">{props.header}</h1>
        <a className="mt-2 hover:text-magenta" href={props.contact_url}>
          <span className="mr-2 text-sm">{props.contact_label}</span>&nbsp;
          <ArrowUp45Icon></ArrowUp45Icon>
        </a>
        <nav className=" mt-8 md:mt-16 ">
          <a className="pr-5 text-sm hover:text-magenta" href={props.legal_notice_url}>
            {props.legal_notice_label}
          </a>
          <a className="pr-5 text-sm hover:text-magenta" href={props.data_protection_url}>
            {props.data_protection_label}
          </a>

          <a className="pr-5 text-sm hover:text-magenta" href={props.faq_url}>
            {props.faq_label}
          </a>
        </nav>

        <p className="mb-8 mt-2  text-sm sm:mb-0">{props.copyright}</p>
        <a onClick={scrollToTop} className="cursor-default absolute bottom-4  right-8 text-sm font-semibold hover:text-magenta sm:right-28 ">
          {props.goto_top_label}
          <ArrowUpIcon className="ml-3" />
        </a>
      </div>
    </>
  );
}

export { Footer };
