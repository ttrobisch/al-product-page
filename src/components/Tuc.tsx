import React from "react";

const data = [
  { title: "Home", children: [] },
  { title: "Solution", children: [] },
  { title: "Models", children: [{ title: "Husky" }, { title: "Shuttle" }, { title: "Spot" }, { title: "Capra" }, { title: "Dingo" }, { title: "Crayler" }, { title: "G4T4" }, { title: "Rapyuta" }, { title: "T-Bot" }] },
  { title: "Team", children: [] },
  { title: "Blog", children: [] },
];

const LinkListContext = React.createContext<any>(null);

function LinkList(props: { children: React.ReactNode | React.ReactNode[] }) {
  const [rows, setRows] = React.useState<any[]>([]);
  function handle(index: number, topX: number) {}
  return <LinkListContext.Provider value={handle}>{props.children}</LinkListContext.Provider>;
}

function LinkListItem(props: { href: string; children: React.ReactNode | React.ReactNode[] }) {
  const handle = React.useContext(LinkListContext);
  const [element, setElement] = React.useState<HTMLAnchorElement | null>(null);
  React.useEffect(() => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const topX = rect.top + rect.height / 2;
    const index = 0;
  }, [element]);
  return (
    <a className="peer float-left inline-block text-7xl" href="#" ref={setElement}>
      {props.children}
    </a>
  );
}

function TucGrid() {
  return (
    <LinkList>
      {data.map((item) => (
        <>
          <LinkListItem href="#">{item.title}</LinkListItem>
          {item.children.length > 0 && (
            <div className="float-left hidden w-full peer-hover:flex peer-hover:flex-wrap peer-hover:gap-4">
              {item.children.map((child) => (
                <a className="text-3xl" href="#">
                  {child.title}
                </a>
              ))}
            </div>
          )}
        </>
      ))}
    </LinkList>
  );
}

function Tuc() {
  return (
    <div className="flex flex-wrap gap-8">
      {data.map((item) => (
        <>
          <a className="peer order-1 text-7xl" href="#">
            {item.title}
          </a>
          {item.children.length > 0 && (
            <div className="order-1 hidden shrink-0 basis-full peer-hover:flex peer-hover:flex-wrap peer-hover:gap-4">
              {item.children.map((child) => (
                <a className="text-3xl" href="#">
                  {child.title}
                </a>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export { Tuc, TucGrid };
