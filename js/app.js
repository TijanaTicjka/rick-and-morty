"use strict";
(function (data,ui) {
    const mainRow = document.querySelector("#mainRow");
    const nextButton = document.getElementById("next");
    

    const fillFirstPage = () => {
         data.getFirstPageCharacters()
         .then(res => ui.renderHomePage(res));
    
        }
    fillFirstPage();

    const fillSecondPage = () => {
        data.getSecondPageCharacters()
          .then(res => ui.renderSecondPage(res));
    }

    nextButton.addEventListener("click", fillSecondPage)


    const fillThirdPage = () => {
        if(fillSecondPage()) {
            data.getThirdPageCharacters()
           .then(res => ui.renderThirdPage(res))
        }
    }

    //nextButton.addEventListener("click", fillThirdPage)
    

    })(dataModule,uiModule)