import React from "react";
import Image from "next/image";
import RocketIcon from "@heroicons/react/20/solid/RocketLaunchIcon";
import LinkIcon from "@heroicons/react/20/solid/LinkIcon";
import DownIcon from "@heroicons/react/20/solid/ArrowDownCircleIcon";

type Props = {
  bulletpoints: { text: string }[];
  trial_kit_url: string;
  trial_kit_label: string;
  contact_label: string;
  mail_address: string;
  mail_subject: string;
  mail_body: string;
};

function LandingScreen(props: Props) {
  const [showScroll, setShowScroll] = React.useState(true);

  React.useEffect(() => {
    const offset = 20;
    const checkScrollTop = () => {
      if (window.scrollY <= offset) {
        setShowScroll(true);
      } else if (window.scrollY > offset) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  return (
    <>
      <div className="box-content min-h-screen grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(600px,1fr)] place-items-center justify-items-start">
        <div className="text-white text-4xl md:text-6xl lg:text-8xl font-extrabold">
          Autonomous <br /> Logistics
        </div>
        <div className="justify-self-center lg:justify-self-start lg:col-start-2 md:row-span-3">
          <Image
            src="/images/amr_husky.webp"
            alt="Ein Bild vom Husky"
            width={600}
            height={400}
            placeholder="empty"
            priority
          />
        </div>
        <div className="text-sm md:text-base lg:self-end">
          <ul className="grid gap-3  text-black ">
            {props.bulletpoints.map((bulletpoint) => (
              <li key={bulletpoint.text}>{bulletpoint.text}</li>
            ))}
          </ul>
        </div>
        <div className="pb-4 grid grid-cols-2 gap-4 place-items-start w-max">
          <a
            href={props.trial_kit_url}
            className="bg-[#96B0B3] grid grid-cols-[1fr_auto] justify-items-start items-center gap-3 hover:text-white hover:bg-[#E80381] rounded shadow px-3 py-2 "
          >
            <RocketIcon className="inline w-4" />
            &nbsp;
            {props.trial_kit_label}
          </a>
          <a
            className="bg-[#96B0B3] grid grid-cols-[1fr_auto] justify-items-start items-center gap-3 rounded shadow px-3 py-2 hover:text-white hover:bg-[#E80381]"
            href={`mailto:${props.mail_address}?subject=${encodeURIComponent(
              props.mail_subject
            )}&body=${encodeURIComponent(props.mail_body)}`}
          >
            <LinkIcon className="inline w-4" />
            {props.contact_label}
          </a>
        </div>
        {showScroll && (
          <button
            onClick={() => {
              document
                .getElementById("amrs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="fixed bottom-0 mx-auto p-2 right-0  text-black text-opacity-30"
          >
            <div className="mb-2"></div>
            <DownIcon className="inline animate-bounce w-12" />
          </button>
        )}
      </div>
    </>
  );
}

export { LandingScreen };
