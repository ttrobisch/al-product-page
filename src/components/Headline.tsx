import React from "react";
import { Bitter } from "next/font/google";
import clsx from "clsx";

const bitter = Bitter({ subsets: ["latin"], preload: true });

function Headline(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid place-items-start pb-4">
        <h2
          className={clsx(
            "text-3xl py-3 -ml-8 px-8 bg-white bg-opacity-10 rounded-r",
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
