import {useState, useEffect} from 'react'; 

const usePokemonSprite = () => {
    const [pokemonUrl, setPokemonUrl] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');

    useEffect(()=> {
        const getPokemonImage = async () => {
            const { sprites } = await fetch(pokemonUrl).then((response) => response.json());
            const { front_default: sprite } = sprites;
            setPokemonImage(sprite);
        }
        if(pokemonUrl) { getPokemonImage(); }
    }, [pokemonUrl]);

    return [pokemonImage, setPokemonUrl];
}

export default usePokemonSprite;