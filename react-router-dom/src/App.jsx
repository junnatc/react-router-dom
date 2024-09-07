import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import NavBar from './components/NavBar';
import PokemonDetail from './components/PokemonDetail';
import PokemonForm from './components/PokemonForm';

import './App.css';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemon) => {
    setPokemon([...pokemon, { _id: pokemon.length + 1, ...newPokemon }]);
  };

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/profile" element={<PokemonList pokemonStats={pokemon} />} />
        <Route path="/pokemon/new" element={<PokemonForm onAddPokemon={addPokemon} />} />
        <Route path="/pokemon/:name" element={<PokemonDetail pokemonStats={pokemon} />} />
      </Routes>
    </>
  );
};

export default App;