import React, { PropsWithChildren } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "normalize.css";
import { Container } from "@material-ui/core";

import { Footer } from "./Footer";
import { Header } from "./Header";

import "./layout.css";

interface LayoutProps extends PropsWithChildren {}

export const Layout = ({ children }: LayoutProps) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
