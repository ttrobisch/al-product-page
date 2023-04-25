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
      className="bg-white grid grid-rows-[auto_1fr] border border-white border-opacity-5 hover:scale-105 shadow-sm hover:shadow-2xl transition-transform h-full"
    >
      <div className="relative text-white hover:text-blue-500">
        <button className="absolute w-full aspect-video">
          <PlayIcon className="h-12 m-auto stroke-blue-500 stroke-[0.5]" />
        </button>
        <Image
          placeholder="empty"
          src={video.thumbnail}
          alt={video.title}
          width={600}
          height={400}
          className="w-full aspect-video"
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
