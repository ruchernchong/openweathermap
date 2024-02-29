import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@material-ui/core";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          version
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <footer>
      <Container style={{ padding: "1.45rem" }}>
        &copy;{new Date().getFullYear()} Developed by {author}
      </Container>
    </footer>
  );
};
