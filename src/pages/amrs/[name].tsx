import BackIcon from "@heroicons/react/20/solid/ArrowLeftCircleIcon";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { join } from "path";
import { AMRFacts } from "../../components/AMRFacts";
import { UsageBlock } from "../../components/UsageBlock";

type Props = {
  amrdata: {
    headline_facts: string;
    headline_usage: string;
    max_speed_lbl: string;
    weight_lbl: string;
    drive_type_lbl: string;
    operation_time_lbl: string;
    charging_speed_lbl: string;
    payload_lbl: string;
  };
  amrfacts: {
    max_speed: string;
    weight: string;
    drive_type: string;
    operation_time: string;
    charging_speed: string;
    payload: string;
  };
  amrMatterData: {
    name: string;
    image: string;
  };
  data: {
    page_title: string;
    page_description: string;
  };
  amrUsage: {
    usage: {
      heading: string;
      description: string;
    }[];
  };

  source: MDXRemoteSerializeResult;
};

const components = {
  h1: (props: JSX.IntrinsicElements["h1"]) => <h1 {...props} className="pb-4 text-3xl" />,
  h2: (props: JSX.IntrinsicElements["h1"]) => <h2 {...props} className="pb-4 text-sm" />,
  p: (props: JSX.IntrinsicElements["p"]) => <p {...props} className="pb-4" />,
  a: (props: JSX.IntrinsicElements["a"]) => <a {...props} className="rounded bg-blue-500 px-3 py-2" />,
};

function AmrPage({ amrdata, amrfacts, amrUsage, amrMatterData, data, source }: Props) {
  return (
    <div className="grid min-h-screen items-center p-[5%]">
      <Head>
        <title>{data.page_title}</title>
        <meta name="description" content={data.page_description} />
      </Head>
      <div className="mx-auto grid min-h-[50vh] max-w-7xl grid-rows-[auto_1fr] place-items-center rounded border border-black border-opacity-5 bg-white px-5 py-4 shadow-sm lg:grid-cols-2">
        <Link className="place-self-start" href={"/#" + amrMatterData.name.toLowerCase()}>
          <BackIcon className="active:text-neutrail-500 h-10 w-10 text-neutral-600 hover:text-neutral-400" />
        </Link>
        <Image src={amrMatterData.image} alt={amrMatterData.name} width={600} height={400} className="lg:row-start-2" priority />
        <div className="lg:row-start-2 ">
          <MDXRemote {...source} components={components} />
          <div className="m-4">
            <AMRFacts facts={amrfacts} labels={amrdata} />
          </div>
          <div>
            <UsageBlock usage={amrUsage.usage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmrPage;

export function getStaticPaths(context: GetStaticPathsContext): GetStaticPathsResult {
  const paths = context.locales.map((locale) => {
    const path = process.cwd() + "/_content/amrs_" + locale;
    const files = readdirSync(path).filter((file) => file.endsWith(".mdx"));

    return files.map((file) => ({
      params: {
        name: file.replace(/\.mdx$/, ""),
      },
      locale: locale,
    }));
  });
  return {
    paths: paths.flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { name }, locale }: GetStaticPropsContext<{ name: string }>): Promise<GetStaticPropsResult<Props>> {
  let path = process.cwd() + "/_content/amrs_" + locale;
  const amrFile = join(path, name + ".mdx").replaceAll("\\", "/");
  const amrFileContent = readFileSync(amrFile, "utf-8");
  const amrMatterResult = matter(amrFileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const amrMatterData = {
    name: amrMatterResult.data.name,
    image: amrMatterResult.data.image,
  } as {
    name: string;
    image: string;
  };
  const amrfacts = {
    max_speed: amrMatterResult.data.max_speed,
    weight: amrMatterResult.data.weight,
    drive_type: amrMatterResult.data.drive_type,
    operation_time: amrMatterResult.data.operation_time,
    charging_speed: amrMatterResult.data.charging_speed,
    payload: amrMatterResult.data.payload,
  } as {
    max_speed: string;
    weight: string;
    drive_type: string;
    operation_time: string;
    charging_speed: string;
    payload: string;
  };

  const amrUsage = {
    usage: amrMatterResult.data.usage,
  } as {
    usage: {
      heading: string;
      description: string;
    }[];
  };

  const mdxSource = await serialize(amrFileContent, {
    parseFrontmatter: true,
  });

  const amrpage_path = join(process.cwd(), "meta/amrpage." + locale + ".yml");
  const amrpage_data = readFileSync(amrpage_path, "utf-8");
  const amrresult = matter(amrpage_data, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const amrdata = {
    headline_facts: amrresult.data.headline_facts,
    headline_usage: amrresult.data.headline_usage,
    max_speed_lbl: amrresult.data.max_speed_lbl,
    weight_lbl: amrresult.data.weight_lbl,
    drive_type_lbl: amrresult.data.drive_type_lbl,
    operation_time_lbl: amrresult.data.operation_time_lbl,
    charging_speed_lbl: amrresult.data.charging_speed_lbl,
    payload_lbl: amrresult.data.payload_lbl,
  } as {
    headline_facts: string;
    headline_usage: string;
    max_speed_lbl: string;
    weight_lbl: string;
    drive_type_lbl: string;
    operation_time_lbl: string;
    charging_speed_lbl: string;
    payload_lbl: string;
  };

  const frontpage_path = join(process.cwd(), "meta/frontpage." + locale + ".yml");
  const frontpage_data = readFileSync(frontpage_path, "utf-8");
  const result = matter(frontpage_data, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const data = {
    page_title: result.data.page_title,
    page_description: result.data.page_description,
  } as {
    page_title: string;
    page_description: string;
  };
  return {
    props: {
      amrdata,
      amrfacts,
      amrUsage,
      amrMatterData,
      data,
      source: mdxSource,
    },
  };
}
