import React, { useEffect, useState } from "react";

import axios from "axios";
import { API } from "../../constants";
import { /* IFetchPokemonResponse, */ IPokemonBasic } from "../../types";

import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Container, ContainerWrapper, LoadMore } from "./PokemonList.styled";
import { Loader } from "../Loader/Loader";

export const PokemonList: React.FC = () => {
  // const [data, setData] = useState<IFetchPokemonResponse[]>([]);
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestUrl, setRequestUrl] = useState(API.GET_POKEMONS);

  const getPokemons = async () => {
    try {
      const result = await axios.get(requestUrl);

      // setData(result.data as IFetchPokemonResponse[]);
      setPokemons([...pokemons, ...result.data.results]);
      setRequestUrl(result.data.next);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    getPokemons();
  };

  useEffect(() => {
    getPokemons();

    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  return (
    <>
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
