import clsx from "clsx";
import React from "react";

export function ArrowUp45Icon() {
  return (
    <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.25 12.75L12.7464 3.25M12.7464 3.25H7.63197M12.7464 3.25L12.7464 8.3644" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg {...props} className={clsx("inline", props.className)} width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.18462 21.0074L6.18076 1.00032M6.18076 1.00032L0.771811 6.38682M6.18076 1.00032L11.5898 6.38682" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
