import React, { useEffect } from "react";

type Props = {
  usage: {
    heading: string;
    description: string;
  }[];
};

function UsageBlock({ usage }: Props) {
  return (
    <div className="mb-28 ml-8 grid grid-cols-1 xl:ml-14 xl:grid-cols-[auto_1fr] xl:gap-12">
      <h2 className="vertical-text mb-8 text-5xl font-extrabold uppercase text-gray-200 md:text-8xl xl:text-center ">usage</h2>
      <div className="  grid grid-cols-1 gap-14 pr-8 lg:grid-cols-2">
        {usage.map((usage) => (
          <div>
            <h1 className="mb-4 text-3xl text-gray-700">{usage.heading}</h1>
            <p className=" text-gray-500">{usage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { UsageBlock };
