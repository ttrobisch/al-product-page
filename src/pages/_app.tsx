import { AppProps } from "next/app";
import "../lib/styles.css";
import "@heathmont/moon-themes-tw/lib/moon.css";
import Head from "next/head";
import { Inter } from 'next/font/google'
import data from "../../meta/frontpage.yml";

const inter = Inter({ subsets: ["latin"], preload: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{data.page_title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={data.page_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={inter.className + " mx-auto"}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
