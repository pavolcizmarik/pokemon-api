import React, { useEffect, useState } from "react";

import axios from "axios";
import { API } from "../../constants";
import { IPokemonBasic } from "../../types";

import { PokemonCard } from "../PokemonCard";
import { LoadMore } from "./PokemonList.styled";
import { Container, ContainerWrapper } from "../Layout/Layout.styled";
import { Loader } from "../Loader";

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestUrl, setRequestUrl] = useState(API.GET_POKEMONS);

  const getPokemons = async () => {
    setLoading(true);
    try {
      const result = await axios.get(requestUrl);

      setPokemons([...pokemons, ...result.data.results]);
      setRequestUrl(result.data.next);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    getPokemons();
  };

  useEffect(() => {
    getPokemons();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Container>
        <ContainerWrapper>
          {pokemons?.map((pokemon, i) => {
            return (
              <PokemonCard name={pokemon.name} url={pokemon.url} key={i} />
            );
          })}
        </ContainerWrapper>
        {requestUrl && <LoadMore onClick={handleNextPage}>More</LoadMore>}
      </Container>
    </>
  );
};
