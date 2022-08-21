export interface IPokemonBasic {
  name: string;
  url: string;
}

export interface IFetchPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonBasic[];
}

export interface IPokemonInfo {
  base_experience: number;
  weight: number;
  height: number;
  stats: [
    {
      base_stat: number;
      stat: IPokemonBasic;
    }
  ];
  types: [
    {
      type: IPokemonBasic;
    }
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
