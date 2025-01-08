import { List } from 'ui'
import { useEffect, useState } from 'react';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemon(data)
      });
  }, [])
  return (
  <>
    <h1>Pokemon list:</h1>
    {pokemon && <List data={pokemon.results} />}
  </>
  )
}

export default App
