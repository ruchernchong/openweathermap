import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import "normalize.css";
import { Container } from "@material-ui/core";

import Footer from "../Footer";
import Header from "../Header";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer
        author={data.site.siteMetadata.author}
        version={data.site.siteMetadata.version}
      />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
