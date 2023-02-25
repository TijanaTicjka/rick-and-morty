"use strict"
const uiModule = (function () {
    const mainRow = document.querySelector("#mainRow");
    const previousButton = document.querySelector("#previous");
    const nextButton = document.querySelector("#next");

    const renderFirstPage = (arr) => {
      mainRow.innerHTML = "";
        arr.slice(0,6).forEach(element => {
            
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
        previousButton.style.visibility = "hidden";
        nextButton.style.visibility = "visible";
    }

    const renderSecondPage = (arr) => {
        mainRow.innerHTML = "";
        arr.slice(6,12).forEach(element => {
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
        previousButton.style.visibility = "visible"
        nextButton.style.visibility = "visible";
    }
    
    const renderThirdPage = (arr) => {
        mainRow.innerHTML = "";
        arr.slice(12,20).forEach(element => {
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
        nextButton.style.visibility = "hidden"
    }

    return {
        renderFirstPage,
        renderSecondPage,
        renderThirdPage
    }
})()