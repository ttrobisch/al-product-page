import Layout from "../components/Layout";
import data from "../../meta/frontpage.yml";

type Props = {
  headline: string;
  logo_url: string;
  logo_alt: string;
  bulletpoints: { text: string }[];
};

export default function Index(props: Props) {
  return (
    <Layout>
      <img
        src={props.logo_url}
        alt={props.logo_alt}
        width={300}
        height={300}
      />
      <h1>{props.headline}</h1>
      <ul>
        {props.bulletpoints.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: data,
  };
}
