import React from "react";
import Image from "next/image";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";

function VideoCard(props: { title: string; url: string; thumbnail: string }) {
  const video = props;
  return (
    <a
      key={video.title}
      href={video.url}
      id={video.url}
      target="_blank"
      className="grid h-full grid-rows-[auto_1fr] rounded-xl border border-white border-opacity-5 bg-white shadow-sm transition-transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative text-white hover:text-blue-500">
        <button className="absolute aspect-video w-full">
          <PlayIcon className="m-auto h-12 stroke-blue-500 stroke-[0.5]" />
        </button>
        <Image
          placeholder="empty"
          src={video.thumbnail}
          alt={video.title}
          width={600}
          height={400}
          className="aspect-video w-full rounded-t-xl"
          priority={false}
        />
      </div>
      <div className="px-4 py-3">
        <span>{video.title}</span>
      </div>
    </a>
  );
}

export { VideoCard };
