
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import {getPokemonData, getPokemons} from './api'
import { FavoriteProvider } from './contexts/favoriteContext';


const favoritesKey = "f"

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0) 
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itensPerPage = 30;

  const fetchPokemons = async () =>{
    try {
  
      setLoading(true)
      console.log(loading)
      const data = await getPokemons(itensPerPage, itensPerPage*page)
      const promises = data.results.map(async (_pokemon) =>{
        return await getPokemonData(_pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false)
      setTotalPages(Math.ceil(data.count/itensPerPage))
    } catch (error) {
      console.log('error', error)
    }
    
  }
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);
  useEffect(() =>{
    console.log('carregou')
    fetchPokemons();
  },[page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
    <div className='App'>
      <NavBar />
      <Searchbar />
      <Pokedex
      pokemons = {pokemons}
      loading = {loading}
      page = {page}
      setPage = {setPage}
      totalPages = {totalPages}
      />
    </div>
    </FavoriteProvider>
  );

}

export default App;
