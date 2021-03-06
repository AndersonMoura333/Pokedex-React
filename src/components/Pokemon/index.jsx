import React, {useContext} from "react"
import FavoriteContext from "../../contexts/favoriteContext"
import './index.css'

const Pokemon = ({ pokemon }) => {
    const pokemonUrl = `https://pokemon-react-635a4.web.app/images/animated/${pokemon.id}.gif`
    const {favoritePokemons,updateFavoritePokemons} = useContext(FavoriteContext)
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)

    }
    const primaryClass = `pokemon-card ${pokemon.types[0].type.name}`
    console.log('primaryClass', primaryClass)
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️": "🖤";
    console.log(pokemon)


    return (
        <div className={primaryClass} >
        <>
        <div className="pokemon-image-container">
            <img alt={pokemon.name} src={pokemonUrl} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-btn" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </div>
        </>
    </div>
    )
}

export default Pokemon;