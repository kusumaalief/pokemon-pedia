import React from "react";

type PokemonCardType = {
  data: {
    name: string;
    types: {
      slotOne: string;
      slotTwo: string;
    };
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
  };
};

const PokemonCard = ({ data }: PokemonCardType) => {
  const {
    name,
    sprites: {
      other: { dream_world: dream_world },
    },
  } = data;
  // console.log(dream_world);
  return (
    <div className="card">
      <img
        src={dream_world.front_default}
        className="w-24 h-24 my-2 md:h-32 md:w-28"
      />
      <h1 className="capitalize">{name}</h1>
    </div>
  );
};

export default PokemonCard;
