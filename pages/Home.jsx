import React from "react";
import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

export default function Home() {
  return (
    <div className="home-container">
      <h1>
        Gotta catch 'em all! <MdCatchingPokemon />
      </h1>
      <p>Say hello to all the things Pokémon in one place.</p>
      <Link to="/pokemons">Explore more</Link>
    </div>
  );
}
