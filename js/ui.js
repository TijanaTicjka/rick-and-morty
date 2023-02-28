"use strict"
const uiModule = (function () {
    const mainRow = document.querySelector("#mainRow");
    const renderHomePage = (arr) => {
      mainRow.innerHTML = "";
        arr.forEach(element => {
            const divCharacter = `<div id=${element.id} class=" animation card pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse" style="width:15rem;">
            <img src=${element.image} id=${element.id} class="card-img-top img-thumbnail " alt="...">
            <div class="card-body id=${element.id}">
              <h6 id=${element.id} class="card-title text-primary">${element.name}</h6>
              <button class="like btn btn-outline-primary"><span class="bi bi-heart"></span> Like</button>
            </div>
            </div>`
            mainRow.innerHTML += divCharacter;
        });
    }

    const likeOrUnlike = (event) => {
      const element = event.target;
      console.log(element);
      if(element.classList.contains("like")){
      element.classList.toggle("btn-primary");
      element.classList.toggle("text-white");
      if(element.classList.contains("btn-primary")) {
        element.innerHTML = "";
        element.innerHTML = `<span class="bi bi-heart"></span> Unlike`;
      } else {
        element.innerHTML = "";
        element.innerHTML = `<span class="bi bi-heart"></span> Like`;
      }
    }
  }

  const fillDetailedPage = (c) => {
    mainRow.innerHTML = "";
    let characterName = c.name;
    let colomsForDetails = `
    <div class="row">
       <div class="col">
         <div class="card animation pt-3 shadow-lg p-3 mb-5 bg-body rounded text-center animate__animated animate__pulse">
            <h4>${characterName}</h4>
            <img src="${c.image}" class="card mt-3" id=${c.id}>
            <div class="card-body">
               <h5 class="card-title">Episode(${c.episode})</h5>
       </div>
    </div>
    </div>
    </div>`
    
    mainRow.innerHTML = colomsForDetails;
 }
  
    return {
        renderHomePage,
        likeOrUnlike,
        fillDetailedPage
    }
    
})()