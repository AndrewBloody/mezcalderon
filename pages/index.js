import Head from "next/head";
import Link from "next/link";

import { Container } from "reactstrap";

// Components
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Container className="container">
        <img
          className="index-image"
          src="/images/fondo.jpg"
          alt="index-image"
        />
      </Container>
    </Layout>
  );
}
