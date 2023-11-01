import React, {useState, useEffect} from 'react';
import { useFetch } from '../useFetch';


const {Pokeapi} = () =>{

const { ApiPoke } = useFetch("https://pokeapi.co/api/v2/pokemon/");

return(
    <div>
    <option>Selecciona una imagen</option>
    {ApiPoke.map((item) => (
        <option key={item.name}>{item.name}</option>
      ))}
    </div>
)
}
export default Pokeapi;