import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

export default function Pokemons() {
const [pokemonDetails, setPokemonDetails] = React.useState({description:"", image:"", id:""})
const {id} = useParams()


React.useEffect(() => {

    async function fetchPokemonDetails(id) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const data = await response.json();
        const flavorTextEntry = data.flavor_text_entries[id].flavor_text.replace(/[\n\f]/g, " ");
      
        const imageResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const imageData = await imageResponse.json()
        const image = imageData.sprites.front_default
        setPokemonDetails({ description: flavorTextEntry, id: id, image:image});
      
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    }
    fetchPokemonDetails(id);
  }, [id]);


  return (
    <div>
      <p>{pokemonDetails.description}</p>
      <img src={pokemonDetails.image} />
    </div>
  );
}
