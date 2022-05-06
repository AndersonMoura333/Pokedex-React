
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import {getPokemonData, getPokemons,searchPokemon} from './api'
import { FavoriteProvider } from './contexts/favoriteContext';


const favoritesKey = "f"

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0) 
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 30;

  const fetchPokemons = async () =>{
    try {
  
      setLoading(true)
      setNotFound(false);
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

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

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
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (
          <div class-name="not-found-text">
            
             <img src="https://pokemon-react-635a4.web.app/static/media/tired.3b01c362.gif" alt="loading..."></img>
             <h1>Desculpe, pokémon não encontrado</h1>
             </div>
        ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />)}
    </div>
    </FavoriteProvider>
  );

}

export default App;
