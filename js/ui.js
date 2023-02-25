"use strict"
const uiModule = (function () {
    const mainRow = document.querySelector("#mainRow");
    const nextButton = document.getElementById("next");
    const mainLink = document.getElementById("mainLink")

    const renderHomePage = (arr) => {
        arr.forEach(element => {
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
    }

    const renderSecondPage = (arr) => {
        mainRow.innerHTML = "";
        arr.forEach(element => {
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
        const previous = `<a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span> Previous
      </a>`;
      mainLink.innerHTML += previous;
    }
    
    const renderThirdPage = (arr) => {
        mainRow.innerHTML = "";
        arr.forEach(element => {
            const divCharacter = `<div class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
        const previous = `<a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span> Previous
      </a>`;

    }

    return {
        renderHomePage,
        renderSecondPage,
        renderThirdPage
    }
})()