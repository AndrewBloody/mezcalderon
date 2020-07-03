import Head from "next/head";
import Link from "next/link";

import { Image, Transformation } from "cloudinary-react";
import { Container } from "reactstrap";

// Components
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Container className="container">
        <Image
          cloudName="mezcalcalderon"
          publicId="mezcal1.jpg"
          dpr="auto"
          width="auto"
          responsive
          crop="scale"
        >
          <Transformation quality="auto" fetchFormat="auto" />
          <Transformation border="3px_solid_rgb:00390b" radius="50" />
          <Transformation effect="art:hokusai" />
        </Image>
      </Container>
    </Layout>
  );
}
