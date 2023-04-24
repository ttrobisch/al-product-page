import React from "react";
import Icon from "@heroicons/react/20/solid/CheckCircleIcon";

function BulletPoint(props: { text: string }) {
  return (
    <div className="bg-neutral-100 text-slate-800 opacity-90 hover:opacity-100 py-2 px-6 -ml-8 flex">
      <Icon className="inline mt-[2px] h-5 w-5 mr-2 flex-shrink-0" />
      <p>{props.text}</p>
    </div>
  );
}

export { BulletPoint };
