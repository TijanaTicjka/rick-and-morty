"use strict";
const dataModule = (function () {
    const state = {
        currentPage: 1,
        //allCharacters: []
    };

    class Character {
        constructor(id, name, image) {
           this.id = id,
           this.name = name,
           this.image = image
        }
    } 
    const getAllCharacters = () => {
      return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(res => {
            const allCharacters = [];
            res.results.map(character => {
                const createdCharacter = new Character(character.id, character.name, character.image);
                allCharacters.push(createdCharacter)});
                return allCharacters
            })
        }

    return {
       state,
       getAllCharacters
    }
    
})()