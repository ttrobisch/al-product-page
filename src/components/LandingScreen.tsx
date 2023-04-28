import React from "react";
import Image from "next/image";
import RocketIcon from "@heroicons/react/20/solid/RocketLaunchIcon";
import LinkIcon from "@heroicons/react/20/solid/LinkIcon";
import DownIcon from "@heroicons/react/20/solid/ArrowDownCircleIcon";

type Props = {
  bulletpoints: { text: string }[];
  amr_url: string;
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
      <div
        className="box-content grid place-items-center
       justify-items-start gap-4 rounded-xl bg-frontscreen pl-8 lg:pl-32 pt-6 lg:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(600px,1fr)]"
      >
        <div className="text-4xl font-extrabold text-white md:text-6xl lg:text-8xl">
          Autonomous <br /> Logistics
        </div>
        <div className="font-bold text-white text-l absolute top-6 right-7">
          <a className="no-underline hover:underline" href="/de">DE</a> | <a className="no-underline hover:underline" href="/en">EN</a>
        </div>
        <div className="justify-self-center md:row-span-3 lg:col-start-2 lg:justify-self-start">
          <Image src={props.amr_url} alt="Ein Bild vom Husky" width={600} height={400} quality={75} placeholder="empty" priority />
        </div>
        <div className="text-sm font-extralight md:text-base lg:self-end">
          <ul className="grid gap-3">
            {props.bulletpoints.map((bulletpoint) => (
              <li key={bulletpoint.text}>{bulletpoint.text}</li>
            ))}
          </ul>
        </div>
        <div className="grid w-max grid-cols-2 place-items-start gap-4 pb-4">
          <a href={props.trial_kit_url} className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-3 rounded bg-[#96B0B3] px-3 py-2 shadow hover:bg-[#E80381] hover:text-white ">
            <RocketIcon className="inline w-4" />
            {props.trial_kit_label}
          </a>
          <a className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-3 rounded bg-[#96B0B3] px-3 py-2 shadow hover:bg-[#E80381] hover:text-white" href={`mailto:${props.mail_address}?subject=${encodeURIComponent(props.mail_subject)}&body=${encodeURIComponent(props.mail_body)}`}>
            <LinkIcon className="inline w-4" />
            {props.contact_label}
          </a>
        </div>
        {showScroll && (
          <button
            onClick={() => {
              document.getElementById("amrs")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="fixed bottom-0 right-0 mx-auto pb-5 pr-6  text-black text-opacity-30"
          >
            <div className="mb-2"></div>
            <DownIcon className="inline w-12 animate-bounce" />
          </button>
        )}
      </div>
    </>
  );
}

export { LandingScreen };
