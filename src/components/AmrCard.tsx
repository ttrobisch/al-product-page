import Link from "next/link";
import React from "react";

function AmrCard(props: { name: string; image: string }) {
  return (
    <Link key={props.name} href={"/amrs/" + props.name.toLowerCase()}>
      <div className="grid sm:grid-cols-1 bg-white shadow-sm border border-black border-opacity-5 hover:scale-105 hover:shadow-2xl transition-all">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="relative object-contain aspect-video w-full my-2"
          />
        </div>
        <div className="p-4">
          <h3 className="">{props.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export { AmrCard };
