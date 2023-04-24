import BackIcon from "@heroicons/react/20/solid/ArrowLeftCircleIcon";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { join } from "path";

type Props = {
  name: string;
  image: string;
  source: MDXRemoteSerializeResult;
};

const components = {
  h1: (props: JSX.IntrinsicElements["h1"]) => (
    <h1 {...props} className="text-3xl pb-4" />
  ),
  h2: (props: JSX.IntrinsicElements["h1"]) => (
    <h2 {...props} className="text-sm pb-4" />
  ),
  p: (props: JSX.IntrinsicElements["p"]) => <p {...props} className="pb-4" />,
  a: (props: JSX.IntrinsicElements["a"]) => (
    <a {...props} className="bg-blue-500 rounded px-3 py-2" />
  ),
};

function AmrPage(props: Props) {
  return (
    <div className="max-w-8xl mx-auto p-[5%] min-h-screen grid items-center">
      <div className="bg-neutral-400 rounded bg-opacity-5 border min-h-[50vh] border-black border-opacity-5 shadow-sm px-5 py-4 grid grid-rows-[auto_1fr] lg:grid-cols-2 place-items-center">
        <Link
          className="place-self-start"
          href={"/#" + props.name.toLowerCase()}
        >
          <BackIcon className="h-10 w-10 text-neutral-600 hover:text-neutral-400 active:text-neutrail-500" />
        </Link>
        <img src={props.image} alt={props.name} className="lg:row-start-2" />
        <div className="lg:row-start-2">
          <MDXRemote {...props.source} components={components} />
        </div>
      </div>
    </div>
  );
}

export default AmrPage;

export function getStaticPaths() {
  const path = process.cwd() + "/_content/amrs";
  const files = readdirSync(path).filter((file) => file.endsWith(".mdx"));

  return {
    paths: files.map((file) => ({
      params: {
        name: file.replace(".mdx", ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { name },
}: GetStaticPropsContext<{ name: string }>): Promise<
  GetStaticPropsResult<Props>
> {
  const path = process.cwd() + "/_content/amrs";
  const file = join(path, name + ".mdx").replaceAll("\\", "/");
  const fileContent = readFileSync(file, "utf-8");
  const matterResult = matter(fileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const matterData = matterResult.data as {
    name: string;
    image: string;
  };

  const mdxSource = await serialize(fileContent, {
    parseFrontmatter: true,
  });

  console.log(matterData);

  return {
    props: {
      ...matterData,
      source: mdxSource,
    },
  };
}
