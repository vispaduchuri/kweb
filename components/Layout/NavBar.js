import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const navbarLinks = [
  { title: "HOME", name: "index", url: "/" },
  { title: "ABOUT US", name: "about", url: "/about" },
  { title: "PRODUCTS", name: "products", url: "/products" },
  { title: "CONTACT US", name: "contact", url: "/contact" }
];

const NavHelper = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link href="/">
          <Navbar.Brand>KUKKE ENTERPRISE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <ul>
              {navbarLinks.map((i, index) => (
                <div key={index}>
                  <li>
                    <Link href={i.url} passHref>
                      <Nav.Link>{i.title}</Nav.Link>
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavHelper />
    </div>
  );
};

export default NavBar;
