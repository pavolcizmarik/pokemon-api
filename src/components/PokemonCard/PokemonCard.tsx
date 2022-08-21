import axios from "axios";
import React, { useEffect, useState } from "react";

import { ADVANCED_STATS, API, BASE_STATS } from "../../constants";

import { IPokemonBasic, IPokemonInfo } from "../../types";
import {
  Card,
  CardBadge,
  CardHealth,
  CardImg,
  CardImgWrapper,
  CardName,
  CardStats,
  CardType,
} from "./PokemonCard.styled";

export const PokemonCard: React.FC<IPokemonBasic> = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState<IPokemonInfo>();
  const [stats, setStats] = useState([]);

  const getPokemonData = async () => {
    /* const response = await axios.get(url); */
    const response = await axios.get(`${API.GET_POKEMONS}/${name}`);

    setPokemonData(response.data);

    const baseStatsKeys = BASE_STATS;
    const advancedStatsKeys = ADVANCED_STATS;

    const filteredBaseStats = Object.keys(response.data)
      .filter((key) => baseStatsKeys.includes(key))
      .reduce((obj: any, key: any) => {
        obj[key] = response.data[key];
        return obj;
      }, {});

    const filteredAdvancedStats = response.data.stats
      .filter((key: any) => advancedStatsKeys.includes(key.stat.name))
      .reduce((obj: any, key: any) => {
        obj[key.stat.name] = key.base_stat;
        return obj;
      }, {});

    setStats({ ...filteredBaseStats, ...filteredAdvancedStats });
  };

  useEffect(() => {
    getPokemonData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {pokemonData && (
        <Card type={pokemonData.types[0].type.name}>
          <CardHealth>
            <span>HP </span>
            {pokemonData.stats.map((stat) => {
              if (stat.stat.name === "hp") {
                return stat.base_stat;
              }
              return null;
            })}
          </CardHealth>
          <CardImgWrapper>
            <CardImg
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={name}
              loading="lazy"
            />
          </CardImgWrapper>
          <CardName>{name}</CardName>
          <CardType>
            {pokemonData.types.map(({ type }, i) => {
              return (
                <CardBadge className={`bg-${type.name}`} key={i}>
                  {type.name}
                </CardBadge>
              );
            })}
          </CardType>
          <CardStats>
            {Object.entries(stats).map(([key, value]: any, i) => {
              return (
                <div key={i}>
                  <i data-icon={key}></i>
                  <p>{value}</p>
                </div>
              );
            })}
          </CardStats>
        </Card>
      )}
    </>
  );
};
