import React from "react";

import logo from "../../assets/logo.png";
import { Container, ContainerWrapper } from "../PokemonList/PokemonList.styled";

export const Header: React.FC = () => {
  return (
    <>
      <Container className="bg-red-600">
        <ContainerWrapper>
          <img src={logo} alt="logo" className="d-block w-40 py-4" />
        </ContainerWrapper>
      </Container>
    </>
  );
};
