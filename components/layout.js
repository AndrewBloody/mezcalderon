import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavLink,
  NavbarText,
} from "reactstrap";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <style jsx global>{`
        body {
          background: #121212;
          color: white;
        }
      `}</style>
      <Head>
        {/* <title>Mezcalderon</title> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Navbar className={`${styles.navbarPrincipal} navbar-dark `} expand="md">
        <NavbarBrand>
          <Link href="/">
            <img
              className={styles.logo}
              src="/images/logo_v2.svg"
              alt="Logo mezcalderon"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="custom-toggler" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link href="/about">
                  <a>Acerca de</a>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText color="primary">Proximamente</NavbarText>
        </Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
