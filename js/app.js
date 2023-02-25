"use strict";
(function (data,ui) {
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous")
    
    const fillFirstPage = () => {
         data.getAllCharacters()
         .then(res => {
            ui.renderFirstPage(res);
        });
    
        }
    fillFirstPage();


    const fillSecondPage = () => {
        data.getAllCharacters()
          .then(res => {
            ui.renderSecondPage(res)
            data.state.currentPage = 2;
          
    });
    }
    const fillThirdPage = () => {
            data.getAllCharacters()
           .then(res => {
            data.state.currentPage = 3;
            ui.renderThirdPage(res)})
    }


    nextButton.addEventListener("click", () => {
        if(data.state.currentPage === 1) {
            fillSecondPage();
        } else if(data.state.currentPage === 2){
            fillThirdPage()
        }
    })

    previousButton.addEventListener("click", () => {
        if(data.state.currentPage === 3) {
            fillSecondPage();
        } else if (data.state.currentPage === 2) {
            fillFirstPage();
            data.state.currentPage = 1;
        }
    })
      
      
      
      
      


    

    })(dataModule,uiModule)