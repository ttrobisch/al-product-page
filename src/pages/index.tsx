import React from "react";
import BulletPointIcon from "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";
import frontpage_data from "../../meta/frontpage.yml";

type Props = {
  headline: string;
  introduction_text: string;
  background_image_url: string;
  background_image_alt: string;

  trial_kit_url: string;
  trial_kit_label: string;
  trial_kit_description: string;

  contact_url: string;
  contact_label: string;
  contact_description: string;

  mail_address: string;
  mail_subject: string;
  mail_body: string;

  video_url: string;
  video_title: string;
  video_subtext: string;

  legal_notice_url: string;
  legal_notice_label: string;

  amr_headline: string;
  amr_subtext: string;

  amrs: {
    name: string;
    description: string;
    image_url: string;
    image_alt: string;
  }[];

  videos: {
    name: string;
    thumbnail: string;
    url: string;
  }[];

  logo_url: string;
  logo_alt: string;
  bulletpoints: { text: string }[];
};

export default function Index() {
  const data = frontpage_data as Props;
  return (
    <div className="col-start-1 row-start-1 p-8 h-screen overflow-auto">
      <div
        className="-m-8 mb-4 p-8 bg-cover"
        style={{
          backgroundImage: `url(${data.background_image_url})`,
          backgroundPositionY: "center",
        }}
      >
        <div className="grid gap-8">
          <img
            src={data.logo_url}
            alt={data.logo_alt}
            width={100}
            className="pb-4"
          />
          <ul className="mb-4 grid gap-1">
            {data.bulletpoints.map((bulletpoint) => (
              <li key={bulletpoint.text}>
                <BulletPointIcon className="inline h-8 mr-2" />
                {bulletpoint.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-4 grid place-items-start gap-2">
          <a
            href={data.trial_kit_url}
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 rounded shadow px-3 py-2"
          >
            {data.trial_kit_label}
          </a>

          <a
            href={data.contact_url}
            className="bg-blue-500 rounded shadow px-3 py-2"
          >
            {data.contact_label}
          </a>

          <a
            href={`mailto:${data.mail_address}?subject=${encodeURIComponent(
              data.mail_subject
            )}&body=${encodeURIComponent(data.mail_body)}`}
          >
            Mail
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-3xl py-3">{data.amr_headline}</h2>
        <p className="empty:hidden pb-3">{data.amr_subtext}</p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mx-2 pb-4">
          {data.amrs.map((amr) => (
            <div key={amr.name}>
              <div className="grid sm:grid-cols-1 gap-4 ">
                <img
                  src={amr.image_url}
                  alt={amr.image_alt}
                  className="object-contain aspect-video w-full p-4 bg-neutral-800"
                />
                <div>
                  <h3 className="text-2xl pb-2 text-neutral-100">{amr.name}</h3>
                  <p className="text-neutral-500">{amr.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl pb-3">{data.video_title}</h2>
      <p className="empty:hidden pb-4">{data.video_subtext}</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {data.videos.map((video) => (
          <a key={video.name} href={video.url} id={video.url}>
            <div className="relative hover:text-blue-500">
              <button className="absolute inset-0">
                <PlayIcon className="h-12 m-auto shadow-lg stroke-blue-500 stroke-[0.5]" />
              </button>
              <img src={video.thumbnail} alt={video.name} className="mb-2" />
            </div>
            <span>{video.name}</span>
          </a>
        ))}
      </div>

      <footer className="py-4">
        <a className="text-blue-500" href={data.legal_notice_url}>
          {data.legal_notice_label}
        </a>
      </footer>
    </div>
  );
}
