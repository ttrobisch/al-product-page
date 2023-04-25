import React from "react";
import yaml from "../../meta/events.yml";
import Link from "next/link";

type Event = {
  slug: string;
  name: string;
  date: string;
  img_url: string;
  img_alt: string;
};

const events = yaml.events as Event[];

function EventCard(props: Event) {
  return (
    <Link
      href={"/events/" + props.slug}
      className="grid h-[30rem] w-60 items-end rounded bg-neutral-100"
      style={{
        backgroundImage: `url(${props.img_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded-b bg-neutral-800 px-8 py-6">
        <h1 className="text-white">{props.name}</h1>
        <time className="text-sm text-white text-opacity-60">{props.date}</time>
      </div>
    </Link>
  );
}

function Carousel(props: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="flex gap-4 overflow-auto px-4">
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return <div data-i={index}>{child}</div>;
      })}
    </div>
  );
}

function Pagination(props: { children: React.ReactNode | React.ReactNode[] }) {
  const [page, setPage] = React.useState(0);

  const children = React.Children.toArray(props.children);
  const pages = Math.ceil(children.length / 3);

  const pageChildren = children.slice(page * 3, (page + 1) * 3);

  return (
    <>
      <div className="mb-4 grid place-items-center">
        <Carousel>{pageChildren}</Carousel>
      </div>
      <div className="flex justify-center gap-4">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className="h-4 w-4 rounded-full bg-neutral-800"
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </>
  );
}

function Events() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        <Pagination>
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default Events;
