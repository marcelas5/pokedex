import React from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function PokemonSearch() {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = searchParams.get("name") || "";

  React.useEffect(() => {
    async function getPokemonList() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    }
    getPokemonList();
  }, []);

  const pokemons = pokemonList.map((pokemon) => ({
    ...pokemon,
    id: pokemon.url.match(/\/(\d+)\/$/)[1],
    name: pokemon.name,
  }));

  const filteredPokemons = nameFilter
    ? pokemons.filter((pokemon) => pokemon.name === nameFilter)
    : pokemons;

  const pokemon = filteredPokemons.map((pokemon) => (
    <div className="pokemon-tile" key={pokemon.id}>
      <Link className="pokemonId-link" to={`/pokemons/${pokemon.id}`}>
        {pokemon.name}
      </Link>
    </div>
  ));

  return <div>{pokemon}</div>;
}
