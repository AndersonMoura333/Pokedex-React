
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import {getPokemonData, getPokemons} from './api'


function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async () =>{
    try {
  
      setLoading(true)
      console.log(loading)
      const data = await getPokemons()
      const promises = data.map(async (_pokemon) =>{
        return await getPokemonData(_pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false)
    } catch (error) {
      console.log('error', error)
    }
    
  }
  useEffect(() =>{
    console.log('carregou')
    fetchPokemons();
  },[])

  return (
    <div>
      <NavBar />
      <Searchbar />
      <Pokedex
      pokemons = {pokemons}
      loading = {loading}
      />
    </div>
  );

}

export default App;
