"use strict";
const dataModule = (function () {
    const state = {
        currentPage:"https://rickandmortyapi.com/api/character?page=1",
        allPages: 42,
        next :"https://rickandmortyapi.com/api/character?page=2",
        prev: null
    };

    class Character {
        constructor(id, name, image, status, species, gender, episode) {
           this.id = id,
           this.name = name,
           this.image = image,
           this.species = species,
           this.status = status,
           this.gender = gender,
           this.episode = episode
        }
    } 

    const getCharactersPerPage = (input = state.currentPage) => {
         return fetch(input).then(res => res.json())
         .then(res => {
            state.next = res.info.next;
            state.prev = res.info.prev;
             const allCharacters = [];
             res.results.map(character => {
                 const createdCharacter = new Character(character.id, character.name, character.image);
                 allCharacters.push(createdCharacter)});
                 return allCharacters 
        })
    }

     const getSingleCharacter = (id) => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then (res => {
            const createdCharacter = new Character(res.id, res.name, res.image, res.species, res.status, res.gender, res.episode.length);
            console.log(createdCharacter);
            return createdCharacter;
        })
    }
    

    return {
       state,
       getCharactersPerPage,
       getSingleCharacter 
    }
    
})()