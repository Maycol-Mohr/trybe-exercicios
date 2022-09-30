import React, { useEffect } from "react";

function BestPokemon() {
    //willUnmount
    useEffect(() => {
        return () => console.log('desmontou');
    }, [])
    return (
      <div>
        <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        alt="squirtle"
        width={250}
        />
      </div>
    )
  }

export default BestPokemon; 
