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
      <Head>
        <title>Mezcalderon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link href="/">
            <img className={styles.logo} src="/images/cactus.png" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
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
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
