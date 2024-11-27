import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para la carta generada
  const [carta, setCarta] = useState(null);
  const [loading, setLoading] = useState(false);  // Para mostrar el estado de carga

  // Función para generar un ID aleatorio de Pokémon
  const generarID = () => {
    return Math.floor(Math.random() * 1025) + 1;
  };

  // Función para obtener los datos de un Pokémon desde la API
  const fetchPokemon = async () => {
    const pokemonID = generarID();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    
    try {
      setLoading(true);  // Comienza la carga
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon');
      }
      const data = await response.json();
      setCarta(data);  // Actualiza el estado con la carta del Pokémon
    } catch (error) {
      console.error(error);
      alert('Hubo un problema al generar la carta del Pokémon. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);  // Termina la carga
    }
  };

  return (
    <div id="generador-contenedor">
      <h1>Generador de cartas Pokémon</h1>
      <div id="carta-contenedor">
        {loading ? (
          <h2>Cargando...</h2>
        ) : carta ? (
          <div className="carta">
            <img src={carta.sprites.front_default} alt={carta.name} />
            <h2>{carta.name}</h2>
            <p><strong>Peso:</strong> {carta.weight / 10} kg</p>
            <p><strong>Habilidad:</strong> {carta.abilities[0].ability.name}</p>
          </div>
        ) : (
          <h2>Hola, da click en la pokebola para generar carta</h2>
        )}
      </div>
      <button id="generar-boton" onClick={fetchPokemon}></button>
    </div>
  );
}

export default App;

