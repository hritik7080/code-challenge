import { List } from 'ui'

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
    <List />
  </>
  )
}

export default App
