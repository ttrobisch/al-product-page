import React from "react";
import "tailwindcss/tailwind.css";
import { ArrowUp45Icon, ArrowUpIcon } from "./icons";

type Props = {
  data: {
    legal_notice_url: string;
    legal_notice_label: string;
  };
};

function Footer() {
  return (
    <div className="relative w-screen bg-[#414D56]  p-12 text-white">
      <h1 className="mt-16 text-4xl font-black">Unleash the Power of Automation.</h1>
      <div className="mt-2 ">
        <span className="mr-2 text-base">Get in Contact now!</span>&nbsp;
        <ArrowUp45Icon></ArrowUp45Icon>
      </div>
      <nav className="mt-16">
        <a className="pr-5" href="">
          Datenschutz
        </a>
        <a className="pr-5" href="">
          Impressum
        </a>
        <a className="pr-5" href="">
          FAQ
        </a>
      </nav>

      <p className="mt-5">© 2023 Autonomous Logistics.</p>
      <div className=" absolute bottom-4 right-28 font-semibold">
        Back to the top
        <ArrowUpIcon className="ml-3"></ArrowUpIcon>
      </div>
    </div>
  );
}

export { Footer };
