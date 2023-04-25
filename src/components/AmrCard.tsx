import React from "react";
import Image from "next/image";
import Link from "next/link";

function AmrCard(props: { name: string; image: string }) {
  return (
    <Link key={props.name} prefetch={false} href={"/amrs/" + props.name.toLowerCase()}>
      <div className="grid sm:grid-cols-1 bg-white shadow-sm border border-black border-opacity-5 hover:scale-105 hover:shadow-2xl transition-all">
        <div className="relative">
          <Image
            src={props.image}
            alt={props.name}
            width={600}
            height={400}
            placeholder="empty"
            className="relative object-contain aspect-video w-full my-2"
          />
        </div>
        <hr />
        <div className="p-4">
          <h3 className="">{props.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export { AmrCard };
