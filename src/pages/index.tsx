import React from "react";
import DownIcon from "@heroicons/react/24/solid/ArrowDownCircleIcon";
import frontpage_data from "../../meta/frontpage.yml";
import { Link } from "../components/Link";
import { BulletPoint } from "../components/BulletPoint";
import { Headline } from "../components/Headline";
import { AmrCard } from "../components/AmrCard";
import { VideoCard } from "../components/VideoCard";
import { join } from "path";
import { readFileSync, readdirSync } from "fs";
import yaml from "js-yaml";
import matter from "gray-matter";
import { LandingScreen } from "../components/LandingScreen";

type Props = {
  amrs: {
    name: string;
    image: string;
  }[];
  videos: {
    title: string;
    thumbnail: string;
    url: string;
  }[];
  data: {
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

    page_description: string;

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
};

export default function Index({ data, amrs, videos }: Props) {
  return (
    <div className="grid gap-14 p-[5vw]">
      <div className="-m-[5vw] p-4 mb-0 grid min-h-screen">
        <LandingScreen bulletpoints={data.bulletpoints} amr_url={data.background_image_url} contact_label={data.contact_label} mail_address={data.mail_address} mail_subject={data.mail_subject} mail_body={data.mail_body} trial_kit_label={data.trial_kit_label} trial_kit_url={data.trial_kit_url} />
      </div>

      <div className="relative mx-auto max-w-screen-2xl pb-8 text-right text-lg font-medium uppercase text-transparent lg:text-3xl">
        <div className="mb-8 h-px bg-line" />
        <div className="absolute" style={{ textShadow: "rgba(0, 0, 0, 0.2) 2px 3px 6px" }}>
          {data.page_description}
        </div>
        <div className="relative bg-gradient-to-r from-gray-400 via-pink-400 to-pink-500 bg-clip-text ">{data.page_description}</div>
      </div>

      <div id="amrs" className="mx-auto max-w-screen-2xl w-full space-y-8">
        <Headline>{data.amr_headline}</Headline>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
          {amrs.map((amr) => (
            <div key={amr.name} id={"#" + amr.name.toLowerCase()} className="">
              <AmrCard {...amr} />
            </div>
          ))}
        </div>
      </div>

      <div id="videos" className="mx-auto mb-24 max-w-screen-2xl w-full space-y-8">
        <Headline>{data.video_title}</Headline>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
          {videos.map((video) => (
            <div key={video.url}>
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="-mx-[5vw] -mb-[5vw] bg-blue p-[5vw]">
          <footer className="m-auto max-w-screen-2xl">
            <a className="text-white" href={data.legal_notice_url}>
              {data.legal_notice_label}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const amr_path = join(process.cwd(), "_content/amrs");
  const amr_files = readdirSync(amr_path);

  const amrs = amr_files.map((file) => {
    const fileContent = readFileSync(join(amr_path, file), "utf-8");
    const matterResult = matter(fileContent, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });
    return matterResult.data as {
      name: string;
      image: string;
    };
  });

  const videos_path = join(process.cwd(), "_content/videos");
  const videos_files = readdirSync(videos_path);

  const videos = videos_files.map((file) => {
    const fileContent = readFileSync(join(videos_path, file), "utf-8");
    const matterResult = matter(fileContent, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });
    return matterResult.data as {
      title: string;
      thumbnail: string;
      url: string;
    };
  });

  return {
    props: {
      data: frontpage_data,
      amrs,
      videos,
    },
  };
}
