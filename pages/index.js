import Head from "next/head";
import Link from "next/link";

// import { Image, Transformation } from "cloudinary-react";
import { Row, Col } from "reactstrap";

// Components
import Layout from "../components/layout";
import MezcalBottle from "../components/MezcalBottle";

// CSS
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col
          sm="12"
          lg="4"
          md="4"
          className={`${styles.leftbanner} d-flex justify-content-center align-items-end`}
        >
          <div className={styles.social}>
            <span className="fa-stack fa-lg">
              <i
                className="fa fa-facebook-square fa-2x text-success"
                aria-hidden="true"
              />
            </span>
            <span className="fa-stack fa-lg">
              <i
                className="fa fa-instagram fa-2x text-success"
                aria-hidden="true"
              />
            </span>
            <span className="fa-stack fa-lg">
              <i
                className="fa fa-twitter fa-2x text-success"
                aria-hidden="true"
              />
            </span>
          </div>
        </Col>
        <Col sm="12" lg="8" md="8" className={styles.rightbanner}>
          <MezcalBottle />
        </Col>
        <div className={styles.index}>
          <p className={styles.indexsign}>Mezcalderón</p>
          <p className={styles.indextitle}>Mezcal Artesanal</p>
          <p className={styles.indexsubtitle}>
            Mezcalderón es una marca que ofrece mezcal artesanal de alta
            calidad. Con su aroma único y notas de sabores agradables al
            paladar.
          </p>
        </div>
      </Row>
      <Row>Hello World</Row>
    </Layout>
  );
}
