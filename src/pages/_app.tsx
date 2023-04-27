import { AppProps } from "next/app";
import "../lib/styles.css";
import "@heathmont/moon-themes-tw/lib/moon.css";
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"], preload: true });

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={inter.className + " mx-auto"}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
