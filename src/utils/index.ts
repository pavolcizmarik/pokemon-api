export const handleColorType = (type: string) => {
  switch (type) {
    case "normal":
      return "bg-image-normal";
    case "fire":
      return "bg-image-fire";
    case "water":
      return "bg-image-water";
    case "electric":
      return "bg-image-electric";
    case "grass":
      return "bg-image-grass";
    case "ice":
      return "bg-image-ice";
    case "fighting":
      return "bg-image-fighting";
    case "poison":
      return "bg-image-poison";
    case "ground":
      return "bg-image-ground";
    case "flying":
      return "bg-image-flying";
    case "psychic":
      return "bg-image-psychic";
    case "bug":
      return "bg-image-bug";
    case "rock":
      return "bg-image-rock";
    case "ghost":
      return "bg-image-ghost";
    case "dragon":
      return "bg-image-dragon";
    case "dark":
      return "bg-image-dark";
    case "steel":
      return "bg-image-steel";
    case "fairy":
      return "bg-image-fairy";
  }
};
