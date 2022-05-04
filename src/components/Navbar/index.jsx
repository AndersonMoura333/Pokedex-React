import React from "react";
import './index.css'
const NavBar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <div>
            <nav>
                <div>
                    <img src= {logoImg}
                     alt=""
                     className="navbar-img"
                     />

                </div>
            </nav>
        </div>
    );
}

export default NavBar;