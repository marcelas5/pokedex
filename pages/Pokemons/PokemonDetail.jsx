import React from 'react';
import {useParams, Link, useLocation} from 'react-router-dom'


export default function Pokemons() {
const [pokemonDetails, setPokemonDetails] = React.useState({description:"", image:"", type:"", weight:"", id:""})
const {id} = useParams()
const location = useLocation()
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState({
  isActive: false,
  message: "An error occurred, plesae try to refresh the page"
});


const search = location.state?.search || ""


React.useEffect(() => {

    async function fetchPokemonDetails(id) {
      setLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const data = await response.json();
        const flavorTextEntry = data.flavor_text_entries[id].flavor_text.replace(/[\n\f]/g, " ");

        const specsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const specsData = await specsResponse.json()
        setPokemonDetails(
          { description: flavorTextEntry, 
            image: specsData.sprites.front_default,
            type: specsData.types[0].type.name, 
            weight: specsData.weight,
            id: id
          });
        setLoading(false)
      
      } catch (error) {
        setError({isActive: true});
      }
    }

    fetchPokemonDetails(id);

  }, [id]);


  if(loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if(error.isActive === true) {
    return (
      <h1>{error.message}</h1>
    )
  }

  console.log(error)


  return (
    <section>
        <Link  to={`..${search}`} relative="path" className="back-button"> &larr; Back to all pokemons </Link>
        <div className="pokemon-detail-container">
            <img className="pokemon-detail-image" src={pokemonDetails.image} />
            <hr/>
            <div className="pokemon-detail-content">
                <p><span>Short description</span>: {pokemonDetails.description}</p>
                <p><span>Type of Pokémon</span>: {pokemonDetails.type} pokémon</p>
                <p><span>Weight</span>: {pokemonDetails.weight} lbs</p>
            </div>
        </div>
    </section>
  );
}
