import React from "react";
import {Headline} from "../components/Headline";
import {AmrCard} from "../components/AmrCard";
import {VideoCard} from "../components/VideoCard";
import {join} from "path";
import {readFileSync, readdirSync} from "fs";
import yaml from "js-yaml";
import matter from "gray-matter";
import {LandingScreen} from "../components/LandingScreen";
import {GetStaticPropsContext} from "next";
import Head from "next/head";
import {Footer} from "../components/Footer";
import {footer} from "mdast-util-to-hast/lib/footer";

type Props = {
    amrs: {
        name: string;
        image: string;
    }[];
    videos: {
        title: string;
        thumbnail: string;
        url: string;
    }[];
    data: {
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

        page_title: string;
        page_description: string;

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
    }
};

export default function Index({data, amrs, videos, footer}: Props) {
    return (
        <>
            <div className="grid gap-14 p-[5vw]">
                <Head>
                    <title>{data.page_title}</title>
                    <meta name="description" content={data.page_description}/>
                </Head>
                <div className="-m-[5vw] p-4 mb-0 grid min-h-screen">
                    <LandingScreen bulletpoints={data.bulletpoints} amr_url={data.background_image_url}
                                   contact_label={data.contact_label} mail_address={data.mail_address}
                                   mail_subject={data.mail_subject} mail_body={data.mail_body}
                                   trial_kit_label={data.trial_kit_label} trial_kit_url={data.trial_kit_url}/>
                </div>

                <div
                    className="mx-auto max-w-screen-2xl pb-8 text-right text-lg font-medium uppercase text-transparent lg:text-3xl">
                    <div className="mb-8 h-px bg-line"/>
                    <div className="text-gray-400">{data.page_description}</div>
                </div>

                <div id="amrs" className="mx-auto max-w-screen-2xl w-full space-y-8">
                    <Headline>{data.amr_headline}</Headline>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
                        {amrs.map((amr) => (
                            <div key={amr.name} id={"#" + amr.name.toLowerCase()} className="">
                                <AmrCard {...amr} />
                            </div>
                        ))}
                    </div>
                </div>

                <div id="videos" className="mx-auto mb-24 max-w-screen-2xl w-full space-y-8">
                    <Headline>{data.video_title}</Headline>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
                        {videos.map((video) => (
                            <div key={video.url}>
                                <VideoCard {...video} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="m-auto">
                <Footer {...footer}/>
            </footer>
        </>
    );
}

export function getStaticProps(props: GetStaticPropsContext) {
    const amr_path = join(process.cwd(), "_content/amrs_" + props.locale);
    const amr_files = readdirSync(amr_path);

    const amrs = amr_files.map((file) => {
        const fileContent = readFileSync(join(amr_path, file), "utf-8");
        const matterResult = matter(fileContent, {
            engines: {
                yaml: (s) => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object,
            },
        });
        return matterResult.data as {
            name: string;
            image: string;
        };
    });

    const videos_path = join(process.cwd(), "_content/videos_" + props.locale);
    const videos_files = readdirSync(videos_path);

    const videos = videos_files.map((file) => {
        const fileContent = readFileSync(join(videos_path, file), "utf-8");
        const matterResult = matter(fileContent, {
            engines: {
                yaml: (s) => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object,
            },
        });
        return matterResult.data as {
            title: string;
            thumbnail: string;
            url: string;
        };
    });

    const data_path = join(process.cwd(), "meta/frontpage." + props.locale + ".yml");
    const fileContent = readFileSync(data_path, "utf-8");
    const result = matter(fileContent, {
        engines: {
            yaml: (s) => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object,
        },
    });
    const data = result.data as Props['data'];

    const footer_path = join(process.cwd(), "meta/footer." + props.locale + ".yml");
    const footerContent = readFileSync(footer_path, "utf-8");
    const footerresult = matter(footerContent, {
        engines: {
            yaml: (s) => yaml.load(s, {schema: yaml.JSON_SCHEMA}) as object,
        },
    });
    const footer = footerresult.data as Props['footer'];
    footer.contact_url = "mailto:" + data.mail_address + "?subject=" + data.mail_subject + "&body=" + data.mail_body;

    return {
        props: {
            data,
            amrs,
            videos,
            footer,
        },
    };
}
