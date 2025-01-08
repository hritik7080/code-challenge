import { List } from 'ui'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setPokemonList } from './store/slices/pokemonSlice';


const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootState) => state.pokemon.list);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(setPokemonList(data.results))
      });
  }, [])
  return (
  <>
    <h1>Pokemon list:</h1>
    {pokemon && <List data={pokemon} />}
  </>
  )
}

export default App
