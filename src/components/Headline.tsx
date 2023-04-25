import React from "react";
import clsx from "clsx";

function Headline(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid place-items-start">
        <h2 className={"rounded-r text-3xl font-medium xl:rounded"}>
          {props.children}
        </h2>
      </div>
    </>
  );
}

export { Headline };
