import React from 'react'
import './List.css';
import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/store/slices/pokemonSlice';

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  data: Pokemon[];
}

export const List: React.FC<ListProps> = ({data}) => {

  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

  console.log('List props:', data)
  return (
    <table className='pokemon-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon, index) => (
          <tr key={index}>
            <td>{pokemon.name}</td>
            <td><a href={pokemon.url} target='_blank'>{pokemon.url}</a></td>
            <td>
              <button onClick={() => handleRemove(pokemon.name)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}