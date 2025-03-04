import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero-image-container"></div>
      <div className="about-content">
        <h2>All the things Pokémon in one place!</h2>
        <h4>
          {" "}
          Welcome to PokéDex Central, your ultimate guide to the fascinating
          world of Pokémon! Our site offers a comprehensive database of all
          Pokémon species, complete with detailed information on their
          abilities, evolutions, and habitats. Whether you're a seasoned Pokémon
          Trainer or new to the adventure, our platform is designed to provide
          you with everything you need to know to catch, train, and battle with
          your favorite Pokémon. Explore our extensive collection, stay updated
          with the latest Pokémon news, and dive into the exciting universe of
          Pokémon like never before!
        </h4>
      </div>
      <Link className="link-button" to="/pokemons">
        I want to know more
      </Link>
    </div>
  );
}
