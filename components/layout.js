import { useState, useEffect, useContext } from "react";
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

// Components
import RegisterModal from "./Login/RegisterModal";
import LogOut from "./Login/LogOut";
import LoginModal from "./Login/LoginModal";

// Context
import { AuthContext } from "../contexts/AuthContext";

import { firebase } from "../firebase";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  console.log("usuario", user);

  return (
    <div>
      <Head>
        {/* <title>Mezcalderon</title> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Parisiennes&display=swap"
          rel="stylesheet"
        />
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
            {!user ? (
              <NavItem>
                <LoginModal />
              </NavItem>
            ) : null}
            <NavItem>{user ? <LogOut /> : <RegisterModal />}</NavItem>
          </Nav>
          <NavbarText color="primary">{user ? user.email : ""}</NavbarText>
        </Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
