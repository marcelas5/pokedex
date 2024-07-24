import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Pokemons from './pages/Pokemons/Pokemons';
import PokemonDetail from './pages/Pokemons/PokemonDetail';
import PokemonSearch from './pages/Pokemons/PokemonSearch';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="pokemons" element={<Pokemons/>} />
          <Route path="pokemons/:id" element={<PokemonDetail/>} />
          <Route path="pokemons/search" element={<PokemonSearch/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
    


}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App/>)
