import React from "react";
import { Link, useSearchParams } from "react-router-dom"


export default function Pokemons() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pokemonList, setPokemonList] = React.useState([]);

    const page = parseInt(searchParams.get("page") || "1", 10)
    const itemsPerPage = 10
  
    React.useEffect(() => {
      async function getPokemonList() {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`);
          const data = await response.json()
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
        name: pokemon.name
      }))


    const totalPages = Math.ceil(pokemons.length / itemsPerPage)
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPokemons = pokemons.slice(startIndex, endIndex)
  
  
    const handlePageChange = (newPage) => {
      setSearchParams(prevParams => {
        prevParams.set("page", newPage)
        return prevParams
      })
    }

    const pokemon = paginatedPokemons.map(pokemon => (
      <div className="pokemon-tile" key={pokemon.id}>
            <Link className="pokemonId-link" to={pokemon.id} 
                  state={{search: `?${searchParams.toString()}` }}>
                  {pokemon.name}
            </Link>
      </div>
    ))  


    return (
          <section className="pokemon-list-container">
            <div className="pokemon-list-title">Explore the interesting world of Pokémons</div>    
            <div className="pokemon-list">
              {pokemon} 
            </div>
            <div>
                {page > 1 && (<button className="page-button" onClick={() => handlePageChange(page - 1)}>Previous</button>)}
                <span className="pagination">Page {page} of {totalPages}</span>
                {page < totalPages && (<button className="page-button" onClick={() => handlePageChange(page + 1)}>Next</button>)}
            </div>
          </section>
        )
}

