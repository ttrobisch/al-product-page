import React from "react";
import DownIcon from "@heroicons/react/24/solid/ArrowDownCircleIcon";
import frontpage_data from "../../meta/frontpage.yml";
import { Link } from "../components/Link";
import { BulletPoint } from "../components/BulletPoint";
import { Headline } from "../components/Headline";
import { AmrCard } from "../components/AmrCard";
import { VideoCard } from "../components/VideoCard";

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
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const [showScroll, setShowScroll] = React.useState(true);

  React.useEffect(() => {
    if (!container) return;
    const offset = 20;
    const checkScrollTop = () => {
      if (container.scrollTop <= offset) {
        setShowScroll(true);
      } else if (container.scrollTop > offset) {
        setShowScroll(false);
      }
    };
    container.addEventListener("scroll", checkScrollTop);
    return () => {
      container.removeEventListener("scroll", checkScrollTop);
    };
  }, [container]);

  return (
    <div
      className="col-start-1 row-start-1 p-[5vw] h-screen overflow-auto"
      ref={setContainer}
    >
      <div
        className="-m-[5vw] mb-24 p-[5vw] bg-cover min-h-screen md:min-h-[unset]"
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
            className="pb-4 mb-24"
          />
          <ul className="mb-12 grid justify-items-start gap-1">
            {data.bulletpoints.map((bulletpoint) => (
              <BulletPoint key={bulletpoint.text} text={bulletpoint.text} />
            ))}
          </ul>
        </div>
        <div className="pb-4 flex flex-wrap gap-2">
          {[
            { url: data.trial_kit_url, label: data.trial_kit_label },
            {
              url: data.contact_url,
              label: data.contact_label,
            },
          ].map((button) => (
            <Link key={button.label} href={button.url}>
              {button.label}
            </Link>
          ))}
        </div>
        {showScroll && (
          <button
            onClick={() => {
              document
                .getElementById("amrs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="fixed bottom-0 mx-auto right-2 md:hidden text-white text-opacity-50"
          >
            <DownIcon className="inline animate-bounce w-12" />
          </button>
        )}
      </div>

      <div className="mb-24" id="amrs">
        <Headline>{data.amr_headline}</Headline>
        <p className="empty:hidden pb-3">{data.amr_subtext}</p>

        <div className="flex flex-wrap gap-4 pb-4">
          {data.amrs.map((amr) => (
            <div key={amr.name} className="flex-grow flex-shrink-0 basis-60 lg:basis-80">
              <AmrCard {...amr} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <Headline>{data.video_title}</Headline>
        <p className="empty:hidden pb-3">{data.video_subtext}</p>
        <div className="flex gap-4 flex-wrap">
          {data.videos.map((video) => (
            <div key={video.url} className="flex-grow flex-shrink-0 basis-60">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>

      <footer className="py-4">
        <a className="text-blue-500" href={data.legal_notice_url}>
          {data.legal_notice_label}
        </a>
      </footer>
    </div>
  );
}
