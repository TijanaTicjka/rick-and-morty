"use strict";
(function (data,ui) {
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const mainRow = document.querySelector("#mainRow");
    const home = document.getElementById("home");

    
    const fillFirstPage = () => {
         data.getCharactersPerPage()
         .then(res => {
            ui.renderHomePage(res);
        });
    }

    fillFirstPage();
    
    const showNextPage = () => {
      let p = data.state.next;
      data.getCharactersPerPage(p).then (res => ui.renderHomePage(res));
      let c = p;
      data.state.currentPage = c;
      if( c === "https://rickandmortyapi.com/api/character?page=2" ){
        previousButton.style.display = "block"
      };
      if( c === "https://rickandmortyapi.com/api/character?page=42"){
        nextButton.style.display = "none";
       }
    }
    
    const showPreviousPage = () => {
        let p = data.state.prev;
        data.getCharactersPerPage(p).then (res => ui.renderHomePage(res));
        let c = p;
        data.state.currentPage = c;
        if(c === "https://rickandmortyapi.com/api/character?page=41") {
            nextButton.style.display = "block";
        };
        if(c === "https://rickandmortyapi.com/api/character?page=1") {
            previousButton.style.display = "none";
        };
    }

    const showDetailedPage = (event) => {
        const element = event.target;
        if(element.id){
        const id = element.id;
        //console.log(id);
        data.getSingleCharacter(id).then(res => ui.fillDetailedPage(res))
        }
    }

    mainRow.addEventListener("click",ui.likeOrUnlike)
    nextButton.addEventListener("click",showNextPage);
    previousButton.addEventListener("click", showPreviousPage);
    mainRow.addEventListener("click",showDetailedPage)


})(dataModule,uiModule)