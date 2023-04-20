import clsx from "clsx";
import React from "react";

function Button(props: JSX.IntrinsicElements["button"]) {
  return (
    <button
      {...props}
      className={clsx(
        props.className,
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      )}
    />
  );
}

export { Button };
