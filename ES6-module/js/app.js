import { state, getCharactersPerPage, getSingleCharacter } from "./data.js";
import { renderHomePage, likeOrUnlike, fillDetailedPage, changeBackButton } from "./ui.js";

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const mainRow = document.querySelector("#mainRow");
const home = document.getElementById("home");
const back = document.getElementById("back");

const fillFirstPage = () => {
  getCharactersPerPage().then((res) => renderHomePage(res));
  let c = state.currentPage;
  if (c === "https://rickandmortyapi.com/api/character?page=1") {
    previousButton.style.display = "none";
  }
};

fillFirstPage();

const showNextPage = () => {
  if (!nextButton.hasAttribute("id")) {
    let p = state.next;
    getCharactersPerPage(p).then((res) => renderHomePage(res));
    let c = p;
    state.currentPage = c;
    if (c === "https://rickandmortyapi.com/api/character?page=2") {
      previousButton.style.display = "block";
    }
    if (c === "https://rickandmortyapi.com/api/character?page=42") {
      nextButton.style.display = "none";
    }
  }
};

const showNextCharacter = (event) => {
  const element = event.target;
  if (parseInt(element.id)) {
    const id = element.id;
    getSingleCharacter(id).then((res) => fillDetailedPage(res));
  }
};

const showPreviousPage = () => {
  if (!previousButton.hasAttribute("id")) {
    let p = state.prev;
    getCharactersPerPage(p).then((res) => renderHomePage(res));
    let c = p;
    state.currentPage = c;
    if (c === "https://rickandmortyapi.com/api/character?page=41") {
      nextButton.style.display = "block";
    }
    if (c === "https://rickandmortyapi.com/api/character?page=1") {
      previousButton.style.display = "none";
    }
  }
};

const showPreviousCharacter = (event) => {
  const element = event.target;
  if (parseInt(element.id)) {
    const id = element.id;
    getSingleCharacter(id).then((res) => fillDetailedPage(res));
  }
};

const showDetailedPage = (event) => {
  const element = event.target;
  if (parseInt(element.id)) {
    const id = element.id;
    getSingleCharacter(id).then((res) => fillDetailedPage(res));
  }
};

const goOnLastPage = () => {
  if (!mainRow.classList.contains("ops")) {
    nextButton.style.display = "none";
    previousButton.style.display = "block";
    let p = state.lastPage;
    getCharactersPerPage(p).then((res) => {
      renderHomePage(res);
    });
    state.currentPage = p;
  } else if (mainRow.classList.contains("ops")) {
    changeBackButton();
    let c = state.currentPage;
    getCharactersPerPage(c).then((res) => {
      renderHomePage(res);
    });
    if (c === "https://rickandmortyapi.com/api/character?page=1") {
      previousButton.style.display = "none";
    }
  }
};

mainRow.addEventListener("click", likeOrUnlike);
nextButton.addEventListener("click", showNextPage);
previousButton.addEventListener("click", showPreviousPage);
mainRow.addEventListener("click", showDetailedPage);
nextButton.addEventListener("click", showNextCharacter);
previousButton.addEventListener("click", showPreviousCharacter);
back.addEventListener("click", goOnLastPage);
home.addEventListener("click", () => {
  state.currentPage = "https://rickandmortyapi.com/api/character?page=1";
  let p = state.currentPage;
  getCharactersPerPage(p).then(res => {
    renderHomePage(res);
    changeBackButton();
  })
  previousButton.style.display = "none";
  nextButton.style.display = "block";
});