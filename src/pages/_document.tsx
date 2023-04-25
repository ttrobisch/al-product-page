// next.js document
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir="ltr" lang="de" className={"text-neutral-900 bg-slate-100"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body className="bg-frontscreen lg:bg-frontscreen-big">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
