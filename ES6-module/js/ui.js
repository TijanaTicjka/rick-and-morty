const mainRow = document.querySelector("#mainRow");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const back = document.getElementById("back");

const renderHomePage = (arr) => {
  nextButton.removeAttribute("id");
  previousButton.removeAttribute("id");
  mainRow.classList.remove("ops")
  mainRow.innerHTML = "";
  arr.forEach(element => {
    const divCharacter = `<div id=${element.id} class=" animation card pt-3  bg-body rounded text-center animate__animated animate__pulse" style="width:14rem;">
      <img src=${element.image} id=${element.id} class="card-img-top   img-thumbnail " alt="...">
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
  element.classList.toggle("btn-primary");
  if (element.classList.contains("btn-primary")) {
    element.classList.remove("btn-outline-primary");
    element.innerHTML = "";
    element.innerHTML = `<span class="bi bi-heart"></span> Unlike`;
  } else {
    element.classList.add("btn-outline-primary");
    element.innerHTML = "";
    element.innerHTML = `<span class="bi bi-heart"></span> Like`;
  }
}

const fillDetailedPage = (c) => {
  mainRow.innerHTML = "";
  back.innerHTML = "Back to page";
  nextButton.setAttribute("id",(c.id+1));
  previousButton.style.display="block";
  nextButton.style.display="block";
  previousButton.setAttribute("id", (c.id-1))
  let colomsForDetails = `
    <h4 class="card-title text-center text-primary pt-3 word-wrap fw-bold">${c.name}</h4>
    <div class="col-md-8 bg-body p-2 rounded">
      <img src=${c.image} class="card-img-top rounded img-thumbnail" alt="..."style="height:100%" style="width:100%;">
    </div>
    <div class="col-md-8 bg-body p-2 rounded mb-5 bg-white">
      <ul class="p-1 word-wrap list-group img-thumbnail list-group-flush text-center rounded" style="width:100%">
        <li class="list-group-item list-group-item-warning">${c.status}</li>`
      if(c.gender === "Male"){colomsForDetails += `<li class="list-group-item list-group-item-primary">${c.gender}</li>`} else if (c.gender === "Female"){colomsForDetails += `<li class="list-group-item list-group-item-danger">${c.gender}</li>`} else {colomsForDetails += `<li class="list-group-item list-group-item-light">${c.gender}</li>`}
      if(c.species === "Alive"){colomsForDetails += `<li class="list-group-item list-group-item-success">${c.species}</li>`} else {colomsForDetails += `<li class="list-group-item list-group-item-dark">${c.species}</li>`}
      colomsForDetails += `<li class="list-group-item list-group-item-info">Number of episodes: ${c.episode}</li>
      </ul></div>`

  mainRow.innerHTML = colomsForDetails;
  mainRow.classList.add("ops");
}

const changeBackButton = () => {
    back.innerHTML = "Rick & Morty Wiki"
}

export { renderHomePage, likeOrUnlike, fillDetailedPage,changeBackButton };


