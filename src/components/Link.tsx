import clsx from "clsx";
import React from "react";

function Link(props: JSX.IntrinsicElements["a"]) {
  return (
    <a
      {...props}
      className={clsx(
        props.className,
        "font-light uppercase py-4 px-6 bg-white text-black hover:bg-blue-500 hover:text-white transition-colors" 
      )}
    />
  );
}

export { Link };
