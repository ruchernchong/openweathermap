import React from "react";
import styled from "styled-components";
import { colours } from "../theme";
import { graphql, useStaticQuery } from "gatsby";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  box-shadow: 0 -5px 5px -5px ${colours.gray80};
`;

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

  const { author, version } = data.site.siteMetadata;

  return (
    <StyledFooter>
      {`©${new Date().getFullYear()} Developed by ${author}, ${version}`}
    </StyledFooter>
  );
};
