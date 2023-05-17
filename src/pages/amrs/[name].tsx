import BackIcon from "@heroicons/react/20/solid/ArrowLeftCircleIcon";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import { join } from "path";
import { AMRFacts } from "../../components/AMRFacts";
import { UsageBlock } from "../../components/UsageBlock";
import { AMRDetailimage } from "../../components/AMRDetailimage";
import { Footer } from "../../components/Footer";
import React from "react";

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
    internal_name: string;
    external_name: string;
    fabricator: string;
    details: {
      pathX: number;
      pathY: number;
      pathOffset: number;
      textX: number;
      textY: number;
      textSize: number;
      text: string[];
    }[];
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
  footer: {
    header: string;
    contact_label: string;
    contact_url: string;
    data_protection_label: string;
    data_protection_url: string;
    legal_notice_label: string;
    legal_notice_url: string;
    faq_label: string;
    faq_url: string;
    copyright: string;
    goto_top_label: string;
  };

  source: MDXRemoteSerializeResult;
};

const components = {
  p: (props: JSX.IntrinsicElements["p"]) => <p {...props} className="pb-4 pl-8" />,
  a: (props: JSX.IntrinsicElements["a"]) => <a {...props} className="rounded bg-blue-500 px-3 py-2" />,
};

function AmrPage({ amrdata, amrfacts, amrUsage, amrMatterData, data, footer, source }: Props) {
  return (
    <>
      <div className="grid bg-gray-100 2xl:p-[5vw]">
        <Head>
          <title>{data.page_title}</title>
          <meta name="description" content={data.page_description} />
        </Head>
        <div className="mx-auto grid w-full grid-rows-[auto_1fr] place-items-center rounded border border-black  border-opacity-5 bg-white px-5 py-4  shadow-sm">
          <Link className="place-self-start" href={"/#" + amrMatterData.name.toLowerCase()}>
            <BackIcon className="active:text-neutrail-500 h-10 w-10 text-neutral-600 hover:text-neutral-400" />
          </Link>
          <AMRDetailimage image={amrMatterData.image} internal_name={amrMatterData.internal_name} external_name={amrMatterData.external_name} fabricator={amrMatterData.fabricator} details={amrMatterData.details} />
        </div>
        <div className="mx-auto grid w-auto place-items-center bg-gray-100 ">
          <div className="mx-8 my-16 bg-gray-100 px-0 md:mx-16 md:my-24">
            <div className="grid grid-cols-1 space-x-4 divide-x-2 divide-black md:m-4">
              <div />
              <MDXRemote {...source} components={components} />
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-full rounded-t border-x border-t border-black  border-opacity-5 bg-white">
          <div className="my-16 grid md:my-24">
            <AMRFacts facts={amrfacts} labels={amrdata} />
          </div>
          <div>
            <UsageBlock usage={amrUsage.usage} />
          </div>
        </div>
        <footer className="w-full rounded-b border-x border-b border-black border-opacity-5">
          <Footer {...footer} />
        </footer>
      </div>
    </>
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
    internal_name: amrMatterResult.data.internal_name,
    external_name: amrMatterResult.data.external_name,
    fabricator: amrMatterResult.data.fabricator,
    details: amrMatterResult.data.details,
  } as Props["amrMatterData"];

  const amrfacts = {
    max_speed: amrMatterResult.data.max_speed,
    weight: amrMatterResult.data.weight,
    drive_type: amrMatterResult.data.drive_type,
    operation_time: amrMatterResult.data.operation_time,
    charging_speed: amrMatterResult.data.charging_speed,
    payload: amrMatterResult.data.payload,
  } as Props["amrfacts"];
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
    mail_address: result.data.mail_address,
    mail_subject: result.data.mail_subject,
    mail_body: result.data.mail_body,
  } as {
    page_title: string;
    page_description: string;
    mail_address: string;
    mail_subject: string;
    mail_body: string;
  };

  const footer_path = join(process.cwd(), "meta/footer." + locale + ".yml");
  const footerContent = readFileSync(footer_path, "utf-8");
  const footerresult = matter(footerContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const footer = footerresult.data as Props["footer"];
  footer.contact_url = "mailto:" + data.mail_address + "?subject=" + data.mail_subject + "&body=" + data.mail_body;

  return {
    props: {
      amrdata,
      amrfacts,
      amrUsage,
      amrMatterData,
      data,
      footer,
      source: mdxSource,
    },
  };
}
