import React, { useState, useEffect } from 'react';
import { catchTheApi, getPokemon } from './services/pokeapi';
import Card from './components/Card/Card';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiBaseUrl = ' https://pokeapi.co/api/v2/pokemon?limit=5&offset=0';

  useEffect(() => {
    async function fetchData() {
      let response = await catchTheApi(apiBaseUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
      console.log(response.results);
    }
    fetchData();
  }, []);

  const pagNext = async () => {
    setLoading(true);
    let data = await catchTheApi(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const pagPrev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await catchTheApi(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await catchTheApi(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
    console.log(_pokemonData);
  }



  return (
    <>
      <button onClick={pagPrev} disabled={prevUrl ? '' : 'disabled'}>Prev</button>

      <button onClick={pagNext}>Next</button>
    
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
