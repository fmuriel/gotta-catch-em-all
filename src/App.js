import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './Services/pokeapi';
import Card from './Components/Card/Card';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialUrl = ' https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
    console.log(_pokemonData);
  }

  return (
    <>
      {loading ? <h2>Loading...</h2> : (
        <>
          <div className="container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
        </>
      )}
    </>
  );
}

export default App;
