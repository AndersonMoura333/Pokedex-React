import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import './index.css'
const NavBar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div>
            <nav className='navbar-container'>
                <div>
                    <img src= {logoImg}
                     alt=""
                     className="navbar-img"
                     />

                </div>
                <div><h3>❤️{favoritePokemons.length} Favorite</h3></div>
            </nav>
        </div>
    );
}

export default NavBar;