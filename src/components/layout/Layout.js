import React from "react";
import PropTypes from "prop-types";

import PageContainer from "./containers/PageContainer";

import NavigationBar from "./navbar";
import Footer from "./footer";

import '../../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <PageContainer>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
        </PageContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
