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
  React.useLayoutEffect(() => {
    const target = window.location.hash;
    const gotoElement = document.getElementById(target);
    if (!gotoElement) return;
    gotoElement.scrollIntoView({ block: "center" });
  }, []);

  return (
    <div className="p-[5vw]">
      <div className="-m-[5vw] mb-24">
        <LandingScreen
          bulletpoints={data.bulletpoints}
          contact_label={data.contact_label}
          mail_address={data.mail_address}
          mail_subject={data.mail_subject}
          mail_body={data.mail_body}
          trial_kit_label={data.trial_kit_label}
          trial_kit_url={data.trial_kit_url}
        />
      </div>

      <div className="mb-24 max-w-7xl m-auto" id="amrs">
        <Headline>{data.amr_headline}</Headline>
        <p className="empty:hidden pb-3">{data.amr_subtext}</p>

        <div className="flex flex-wrap gap-4 pb-4">
          {amrs.map((amr) => (
            <div
              key={amr.name}
              id={"#" + amr.name.toLowerCase()}
              className="flex-grow flex-shrink-0 basis-60 lg:basis-80"
            >
              <AmrCard {...amr} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24 max-w-7xl m-auto">
        <Headline>{data.video_title}</Headline>
        <p className="empty:hidden pb-3">{data.video_subtext}</p>
        <div className="flex gap-4 flex-wrap">
          {videos.map((video) => (
            <div
              key={video.url}
              className="flex-grow flex-shrink-0 basis-60 lg:basis-80"
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>

      <footer className="py-4 max-w-7xl m-auto">
        <a className="text-blue-500" href={data.legal_notice_url}>
          {data.legal_notice_label}
        </a>
      </footer>
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
