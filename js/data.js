"use strict";
const dataModule = (function () {
    class Character {
        constructor(id, name, image) {
           this.id = id,
           this.name = name,
           this.image = image
        }
    } 

    const getFirstPageCharacters = () => {
      return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(res => {
            console.log(res);
            const allCharacters = [];
            res.results.slice(0,6).map(character => {
                const createdCharacter = new Character(character.id, character.name, character.image);
                allCharacters.push(createdCharacter)});
                return allCharacters
            })
        }
    
    const getSecondPageCharacters = () => {
        return fetch("https://rickandmortyapi.com/api/character")
          .then(res => res.json())
          .then(res => {
            const allCharacters = [];
                res.results.slice(6,12).map(character => {
                    const createdCharacter = new Character(character.id, character.name, character.image);
                    allCharacters.push(createdCharacter)});
                    return allCharacters
            })
        
        }
    const getThirdPageCharacters = () => {
        return fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => {
            const allCharacters = [];
                res.results.slice(12,18).map(character => {
                    const createdCharacter = new Character(character.id, character.name, character.image);
                    allCharacters.push(createdCharacter)});
                    return allCharacters
            })
            
        }
    

    return {
        getFirstPageCharacters,
        getSecondPageCharacters,
        getThirdPageCharacters
    }
    
})()