import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "normalize.css";

import Header from "./Header/Header";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header siteTitle="OpenWeatherMap" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
