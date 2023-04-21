import React from "react";
import clsx from "clsx";
import { Bitter } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"], preload: true });

function Headline(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid place-items-start pb-8">
        <h2
          className={clsx(
            "text-3xl py-3 -ml-[5vw] px-[5vw] bg-white bg-opacity-10 xl:rounded rounded-r",
            bitter.className
          )}
        >
          {props.children}
        </h2>
      </div>
    </>
  );
}

export { Headline };
