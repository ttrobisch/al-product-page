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
      className="w-60 h-[30rem] rounded bg-neutral-100 grid items-end"
      style={{
        backgroundImage: `url(${props.img_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-8 py-6 bg-neutral-800 rounded-b">
        <h1 className="text-white">{props.name}</h1>
        <time className="text-sm text-white text-opacity-60">{props.date}</time>
      </div>
    </Link>
  );
}

function Carousel(props: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="flex overflow-auto gap-4 px-4">
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
      <div className="grid place-items-center mb-4">
        <Carousel>{pageChildren}</Carousel>
      </div>
      <div className="flex justify-center gap-4">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className="w-4 h-4 rounded-full bg-neutral-800"
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </>
  );
}

function Events() {
  return (
    <>
      <h1>Events</h1>
      <nav>
        <ul>
          {events.map((event) => (
            <li key={event.slug}>
              <Link href={"/events/" + event.slug}>{event.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Pagination>
        {events.map((event) => (
          <EventCard key={event.slug} {...event} />
        ))}
      </Pagination>
    </>
  );
}

export default Events;
