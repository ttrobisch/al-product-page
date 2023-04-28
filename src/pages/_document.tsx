// next.js document
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de" className={"bg-slate-100 text-neutral-900"}>
        <Head>
          <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
