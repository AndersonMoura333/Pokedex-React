import React from "react"
import Pokemon from "../Pokemon"
import './index.css'
import Pagination from "../Pagination/index"
const Pokedex = ({ loading, pokemons,page,setPage,totalPages }) => {
    const onLeftClickHandler = () =>{
        if (page >0) {
            setPage(page-1)
        }
    }

    const onRightClickHandler = () =>{
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    return (
        <div>
            <div className='pokedex-header'>
                <div>
                    <h1>Pokedex</h1>
                </div>
                <Pagination
                page = {page}
                totalPages = {totalPages}
                onLeftClick = {onLeftClickHandler}
                onRightClick = {onRightClickHandler}
                />
            </div>

            {loading ? (<div className="loading-container"> carregando espere, treinador Pokémon</div>)

                :
                (<div className="pokedex-grid">
                    {pokemons.map((_pokemon) => {
                        return <div className="pokedex-grid-item"><Pokemon key={_pokemon.name} pokemon={_pokemon} /></div>
                    })}
                </div>)
            }
        </div>
    )
}

export default Pokedex;