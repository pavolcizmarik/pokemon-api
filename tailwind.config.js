const colors = {
  white: "#ffffff",
  black: "#232323",
  normal: "#a8a77a",
  fire: "#ee8130",
  water: "#6390f0",
  electric: "#f7d02c",
  grass: "#7ac74c",
  ice: "#96d9d6",
  fighting: "#c22e28",
  poison: "#a33ea1",
  ground: "#e2bf65",
  flying: "#a98ff3",
  psychic: "#f95587",
  bug: "#a6b91a",
  rock: "#b6a136",
  ghost: "#735797",
  dragon: "#6f35fc",
  dark: "#705746",
  steel: "#b7b7ce",
  fairy: "#b7b7ce",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        normal: colors.normal,
        fire: colors.fire,
        water: colors.water,
        electric: colors.electric,
        grass: colors.grass,
        ice: colors.ice,
        fighting: colors.fighting,
        poison: colors.poison,
        ground: colors.ground,
        flying: colors.flying,
        psychic: colors.psychic,
        bug: colors.bug,
        rock: colors.rock,
        ghost: colors.ghost,
        dragon: colors.dragon,
        dark: colors.dark,
        steel: colors.steel,
        fairy: colors.fairy,
      },
      backgroundImage: {
        "image-pokeball-pattern": `linear-gradient(${colors.fighting} 125px, ${colors.white} 125px)`,
        "image-pokeball-button": `radial-gradient(${colors.white} 0px, ${colors.white} 10px, ${colors.black} 10px, ${colors.black} 16px, ${colors.white} 16px, ${colors.white} 32px, ${colors.black} 32px)`,
        "image-normal": `radial-gradient(circle at 50% -15%, ${colors.normal} 50%, ${colors.white} 50%)`,
        "image-fire": `radial-gradient(circle at 50% -15%, ${colors.fire} 50%, ${colors.white} 50%)`,
        "image-water": `radial-gradient(circle at 50% -15%, ${colors.water} 50%, ${colors.white} 50%)`,
        "image-electric": `radial-gradient(circle at 50% -15%, ${colors.electric} 50%, ${colors.white} 50%)`,
        "image-grass": `radial-gradient(circle at 50% -15%, ${colors.grass} 50%, ${colors.white} 50%)`,
        "image-ice": `radial-gradient(circle at 50% -15%, ${colors.ice} 50%, ${colors.white} 50%)`,
        "image-fighting": `radial-gradient(circle at 50% -15%, ${colors.fighting} 50%, ${colors.white} 50%)`,
        "image-poison": `radial-gradient(circle at 50% -15%, ${colors.poison} 50%, ${colors.white} 50%)`,
        "image-ground": `radial-gradient(circle at 50% -15%, ${colors.ground} 50%, ${colors.white} 50%)`,
        "image-flying": `radial-gradient(circle at 50% -15%, ${colors.flying} 50%, ${colors.white} 50%)`,
        "image-psychic": `radial-gradient(circle at 50% -15%, ${colors.psychic} 50%, ${colors.white} 50%)`,
        "image-bug": `radial-gradient(circle at 50% -15%, ${colors.bug} 50%, ${colors.white} 50%)`,
        "image-rock": `radial-gradient(circle at 50% -15%, ${colors.rock} 50%, ${colors.white} 50%)`,
        "image-ghost": `radial-gradient(circle at 50% -15%, ${colors.ghost} 50%, ${colors.white} 50%)`,
        "image-dragon": `radial-gradient(circle at 50% -15%, ${colors.dragon} 50%, ${colors.white} 50%)`,
        "image-dark": `radial-gradient(circle at 50% -15%, ${colors.dark} 50%, ${colors.white} 50%)`,
        "image-steel": `radial-gradient(circle at 50% -15%, ${colors.steel} 50%, ${colors.white} 50%)`,
        "image-fairy": `radial-gradient(circle at 50% -15%, ${colors.fairy} 50%, ${colors.white} 50%)`,
      },
    },
  },
  plugins: [],
};
