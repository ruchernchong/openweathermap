import React from "react";
import { Link } from "gatsby";
import { Container } from "@material-ui/core";

interface HeaderProps {
  siteTitle: string;
}

export const Header = ({ siteTitle }: HeaderProps) => (
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
