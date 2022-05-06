import React, { useState } from 'react'
import {searchPokemon} from '../../api'
import './index.css'

const Searchbar = ({onSearch}) =>{
    const [search, setSearch] = useState('')

    const onChangeHandler = (e) =>{
        setSearch(e.target.value.toLowerCase())
        if(e.target.value.length === 0){
            onSearch(undefined);
        }
    }

    const onButtonClickHandler = async (e) =>{
      onSearch(search)
        
       }
    return(
       
        <div className='searchbar-conteiner'>
            <div className='searchbar'>
            <input placeholder='Buscar pokémon' onChange={onChangeHandler}/>
            </div>
            <div className='searchbar-btn'>
                <button onClick={onButtonClickHandler}>Buscar</button>

            </div>
        </div>
        
    )
}

export default Searchbar