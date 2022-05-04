import React from "react"
import Pokemon from "../Pokemon"
import './index.css'
const Pokedex = ({ loading, pokemons }) => {
    return (
        <div>
            <div className='pokedex-header'>
                <div>
                    <h1>Pokedex</h1>
                </div>
                <div>paginação:</div>
            </div>

            {loading ? (<div> carregando espere, treinador Pokémon</div>)

                :
                (<div className="pokedex-grid">
                    {pokemons.map((_pokemon) => {
                        return <Pokemon key={_pokemon.name} pokemon={_pokemon} />
                    })}
                </div>)
            }
        </div>
    )
}

export default Pokedex;