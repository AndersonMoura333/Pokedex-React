export const searchPokemon = async (pokemon) => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await (await fetch(url)).json()
        return response

    } catch (error) {
        console.log('error: ',error)
    }
}
export const getPokemons = async (limit = 50, offset = 0) => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await (await fetch(url)).json()
        return response.results

    } catch (error) {
        console.log('error: ',error)
    }
}

export const getPokemonData = async(pokemonUrl) =>{
    try {
        const url = pokemonUrl
        const response =  await (await fetch(url)).json()
        return response
    } catch (error) {
        console.log('error: ',error) 
    }
}