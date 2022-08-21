import React from "react";

import { Header } from "./components/Header/Header";
import { PokemonList } from "./components/PokemonList/PokemonList";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <PokemonList />
    </>
  );
};
