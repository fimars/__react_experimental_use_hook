import { use } from 'react'

 const getPokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json())

export function AsyncPokemon() {
   const data = use(getPokemon)
   return (
      <div>
         <h1>{data.name}</h1>
         <img src={data.sprites.front_default} alt={data.name} />
      </div>
   )
}