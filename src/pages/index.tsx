import data from "../../meta/frontpage.yml";

type Props = {
  headline: string;
  introduction_text: string;

  trial_kit_url: string;
  trial_kit_label: string;
  trial_kit_description: string;

  contact_url: string;
  contact_label: string;
  contact_description: string;

  video_url: string;
  video_title: string;
  video_subtext: string;

  amr_headline: string;
  amr_subtext: string;

  amrs: {
    name: string;
    description: string;
    image_url: string;
    image_alt: string;
  }[];

  logo_url: string;
  logo_alt: string;
  bulletpoints: { text: string }[];
};

export default function Index() {
  return (
    <div className="h-screen overflow-auto p-8">
      <h1 className="text-4xl pb-5">{data.headline}</h1>
      <p className="empty:hidden pb-3">{data.introduction_text}</p>

      <div className="pb-4">
        <p className="empty:hidden">{data.trial_kit_description}</p>
        <a href={data.trial_kit_url} className="text-blue-500">
          {data.trial_kit_label}
        </a>
        <p className="empty:hidden">{data.contact_description}</p>
        <a href={data.contact_url} className="text-blue-500">
          {data.contact_label}
        </a>
      </div>

      <h2 className="text-2xl py-3">{data.video_title}</h2>
      <div className="pb-3 rounded">
        <video
          className="w-full aspect-video"
          src="/images/video_bw_001.mp4"
          muted
          autoPlay
        />
      </div>
      <p className="empty:hidden pb-4">{data.video_subtext}</p>

      <h2 className="text-2xl py-3">{data.amr_headline}</h2>
      <p className="empty:hidden pb-3">{data.amr_subtext}</p>

      <div className="grid gap-4 -mx-2">
        {data.amrs.map((amr) => (
          <div key={amr.name}>
            <div className="grid sm:grid-cols-2 gap-4 bg-black bg-opacity-20 rounded-xl shadow-xl px-6 py-4">
              <img
                src={amr.image_url}
                alt={amr.image_alt}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <div>
                <h3 className="text-3xl pb-4 text-neutral-100">{amr.name}</h3>
                <p className="text-neutral-100">{amr.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
