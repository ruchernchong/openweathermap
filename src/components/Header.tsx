import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Container } from "@material-ui/core";

export const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: "1.45rem" }}>
    <Container style={{ padding: "1.45rem" }}>
      <h1>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};
