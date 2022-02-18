import '../styles/globals.scss'
import Layout from '../components/layout'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faSpotify,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";

// library.add(fab, faTwitterSquare, faSpotify, faLinkedin, faGithub);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
