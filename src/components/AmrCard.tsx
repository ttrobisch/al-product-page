import React from "react";

function AmrCard(props: {
  name: string;
  image_url: string;
  image_alt: string;
  description: string;
}) {
  return (
    <div key={props.name}>
      <div className="grid sm:grid-cols-1 bg-black bg-opacity-5 border border-white border-opacity-5">
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <svg viewBox="0 0 16 9" width="100%" height="100%" className="absolute inset-0">
            <path d="M3,7L13,7L15,9L1,9" className="fill-current text-neutral-500 text-opacity-5" />
          </svg>
          <img
            src={props.image_url}
            alt={props.image_alt}
            className="relative object-contain aspect-video w-full my-2"
          />
        </div>
        <div className="p-4">
          <h3 className="text-neutral-100">{props.name}</h3>
          <p className="text-neutral-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export { AmrCard };
