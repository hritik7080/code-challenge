import React from 'react'
import './List.css';

interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  data: Pokemon[];
}

export const List: React.FC<ListProps> = ({data}) => {
  console.log('List props:', data)
  return (
    <table className='pokemon-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon, index) => (
          <tr key={index}>
            <td>{pokemon.name}</td>
            <td><a href={pokemon.url} target='_blank'>{pokemon.url}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}