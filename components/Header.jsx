import React from "react";
import { Link, NavLink, useSearchParams, useNavigate } from "react-router-dom";

export default function Header() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = React.useState(searchParams.get("name") || "")

    const navigate = useNavigate()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
        }
    
    const handleSearch = (event) => {
            event.preventDefault();
            navigate(`/pokemons/search?name=${inputValue}`)
            setInputValue("")
        };
        
    return (
        <header>
            <Link className="site-logo"to="/">#PokéDex Central</Link>
            <form onSubmit={handleSearch}>
               <input
                  className="search-input"
                  type="text"
                  value={inputValue}
                  onChange={(event)=>setInputValue(event.target.value)}
                  placeholder="Search for a Pokémon">
               </input> 
               <button className="search-button" type="submit">Search</button>
            </form> 
            <nav>
                <NavLink
                    to="about"
                    style={({ isActive }) => isActive ? activeStyles : null} 
                >
                    About
                </NavLink>
                <NavLink
                    to="pokemons"
                    style={({ isActive }) => isActive ? activeStyles : null} 
                >
                    Pokemons
                </NavLink>
            </nav>
        </header>
    )
}