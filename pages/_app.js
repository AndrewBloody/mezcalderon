import { DefaultSeo } from "next-seo";

// Context
import { AuthContextProvider } from "../contexts/AuthContext";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
