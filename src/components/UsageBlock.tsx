import React, { useEffect } from "react";
// import "../lib/styles.css";

type Props = {
  usage: {
    heading: string;
    description: string;
  }[];
};

function UsageBlock({ usage }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-12">
      <h2 className="vertical-text-big mb-8 text-5xl font-extrabold uppercase text-gray-200 lg:mb-0 lg:text-center">usage</h2>
      <div className=" grid grid-cols-1 gap-14 text-gray-300 lg:grid-cols-2 ">
        {usage.map((usage) => (
          <div>
            <h1 className="mb-4 text-3xl  text-gray-400">{usage.heading}</h1>
            <p className=" text-gray-500">{usage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { UsageBlock };
