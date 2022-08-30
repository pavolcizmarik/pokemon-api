import React from "react";

import logo from "../../assets/logo.png";
import { Container, ContainerWrapper } from "../Layout/Layout.styled";
import { Logo } from "./Header.styled";

export const Header: React.FC = () => {
  return (
    <>
      <Container className="bg-red-600">
        <ContainerWrapper>
          <Logo src={logo} alt="logo" />
        </ContainerWrapper>
      </Container>
    </>
  );
};
