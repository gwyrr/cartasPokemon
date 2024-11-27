import React from 'react';
import './PokemonCard.css'; // Asegúrate de tener un archivo CSS para el estilo

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        {pokemon.sprites?.front_default ? (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="card-image"
          />
        ) : (
          <p>Sin imagen</p>
        )}
      </div>
      <div className="card-body">
        <p>Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <p>HP: {pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat || "N/A"}</p>
      </div>
      <div className="card-footer">
        <button>Atacar</button>
      </div>
    </div>
  );
};

export default PokemonCard;