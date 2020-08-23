import React from "react";
import styled from "styled-components";
import { colours } from "../../theme";

import { author, version } from "../../../package.json";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  box-shadow: 0 -5px 5px -5px ${colours.gray80};
`;

const Footer = () => {
  return (
    <StyledFooter>
      {`©${new Date().getFullYear()} Developed by ${author}, v${version}`}
    </StyledFooter>
  );
};

export default Footer;
