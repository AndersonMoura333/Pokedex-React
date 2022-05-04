import React, { useState } from 'react'
import {searchPokemon} from '../../api'
import './index.css'

const Searchbar = () =>{
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) =>{
        console.log(e.target.value)
        setSearch(e.target.value.toLowerCase())
    }

    const onButtonClickHandler = async (e) =>{
        const result = await searchPokemon(search)
        setPokemon(result)
        console.log(result)
        
       }
    return(
       
        <div className='searchbar-conteiner'>
            <div className='searchbar'>
            <input placeholder='Buscar pokémon' onChange={onChangeHandler}/>
            </div>
            <div className='searchbar-btn'>
                <button onClick={onButtonClickHandler}>Buscar</button>

            </div>
            {
            pokemon ? (
                <div>
                <div>Nome: {pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <img src={pokemon.sprites.front_default} alt="" />
                </div>
            )
        : null}
        </div>
        
    )
}

export default Searchbar