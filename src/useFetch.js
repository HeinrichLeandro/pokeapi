import { useState, useEffect } from "react";


export function useFetch(url){
const [ApiPoke, setApiPoke]= useState([]);

const fetchApiPoke = (url) => {
    fetch (url)
    .then((response) => response.json())
    .then((data) => setApiPoke(data.pokemon.results));
    console.log(response);

};

useEffect(() => {
    fetchApiPoke(url)

}, []);

    return{ ApiPoke };
}