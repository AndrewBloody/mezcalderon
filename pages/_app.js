import { DefaultSeo } from "next-seo";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
