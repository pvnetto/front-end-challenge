import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, NavDropdown } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import style from './NavigationBar.module.scss';
import PhoneDropdown from '../../misc/dropdown/phone/PhoneDropdown';

const NavigationBar = ({ onExpand, expanded }) => {

    const data = useStaticQuery(graphql`
        query {
            groupLogo: file(
                relativePath: { eq: "logos/logo_group.png" }
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            brandLogo: file(
                relativePath: { eq: "logos/logo_brand_toyota.png" }
            ) {
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Navbar id="navbar" className={`${style.navbar} position-absolute d-md-flex d-none flex-column p-0`}>
            <Container className={`${style.navbarContainer} d-flex align-items-center justify-content-between py-4 px-0 h-100`}>

                <Navbar.Brand href="/">
                    <Img fixed={data.groupLogo.childImageSharp.fixed} />
                </Navbar.Brand>


                <Nav className="d-flex align-items-center">
                    <NavDropdown title="Nossos Veículos" id="services-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/">Serviços</Nav.Link>
                    <NavDropdown title="Vendas Diretas" id="direct-sales-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <PhoneDropdown variant="outline-light">Telefones</PhoneDropdown>

                <Navbar.Brand href="/">
                    <Img fixed={data.brandLogo.childImageSharp.fixed} />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;