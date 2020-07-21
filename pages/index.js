import Head from "next/head";
import Link from "next/link";

// import { Image, Transformation } from "cloudinary-react";
import { Row, Col } from "reactstrap";
import { useSpring, animated } from "react-spring";

// Components
import Layout from "../components/layout";
import MezcalBottle from "../components/MezcalBottle";

// CSS
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col lg="5" md="5" sm="12" xs="12" id="titlemz">
          <Row className={`${styles.index} p-5`}>
            {/* <img src="/images/logo_mezcalderon_dorado.svg" alt="logo-oficial" /> */}
            <blockquote className="blockquote text-right">
              <h1 className={`${styles.indexTitle} display-1 text-right"`}>
                Mezcal Artesanal
              </h1>

              <footer className="mr-3 blockquote-footer text-right">
                <cite title="Source Title"> Mezcalderón</cite> es una marca que
                ofrece mezcal artesanal de alta calidad. Con su aroma único y
                notas de sabores agradables al paladar.
              </footer>
            </blockquote>
          </Row>

          <div className="d-flex justify-content-end align-items-end ">
            <a href="https://facebook.com/mezcalderon">
              <span className="fa-stack fa-lg">
                <i
                  className="fa fa-facebook-square fa-2x text-success"
                  aria-hidden="true"
                />
              </span>
            </a>
            <a href="https://instagram.com/mezcalderonoficial">
              <span className="fa-stack fa-lg">
                <i
                  className="fa fa-instagram fa-2x text-success"
                  aria-hidden="true"
                />
              </span>
            </a>
            <span className="fa-stack fa-lg mr-2">
              <i
                className="fa fa-twitter fa-2x text-success"
                aria-hidden="true"
              />
            </span>
          </div>
        </Col>
        <Col
          sm="12"
          lg="7"
          md="7"
          sm="12"
          xs="12"
          className={styles.rigthtpanel}
        >
          <div className={`${styles.btnScroll} `}>
            <Link href="#titlemz">
              <div className="d-flex justify-content-center">
                <div>
                  <i
                    className="fa fa-arrow-up fa-2x text-success"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <i
                    className="fa fa-arrow-up fa-2x text-success"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className={`${styles.mezcalBottle}`}>
            <MezcalBottle />
          </div>
        </Col>
      </Row>
    </Layout>
  );
}
