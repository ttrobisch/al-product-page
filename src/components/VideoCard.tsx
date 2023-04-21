import React from "react";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";

function VideoCard(props: { name: string; url: string; thumbnail: string }) {
  const video = props;
  return (
    <a
      key={video.name}
      href={video.url}
      id={video.url}
      className="grid border border-white border-opacity-5"
    >
      <div className="relative hover:text-blue-500">
        <button className="absolute inset-0">
          <PlayIcon className="h-12 m-auto shadow-lg stroke-blue-500 stroke-[0.5]" />
        </button>
        <img src={video.thumbnail} alt={video.name} className="w-full" />
      </div>
      <div className="px-4 py-3">
        <span>{video.name}</span>
      </div>
    </a>
  );
}

export { VideoCard };
