import React, { useState, useEffect } from "react"
import './index.css'

const Pokemon = ({ pokemon }) => {
    const onHeartClick = () => {

    }
    const heart = "❤";
    console.log(pokemon)


    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>{pokemon.id}</div>
                </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((_type, i) => {
                        return <div key={i} className="pokemon-type-text">{_type.type.name}</div>
                    })}
                </div>
            </div>
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick()}>{heart}</button>
        </div>
    )
}

export default Pokemon;