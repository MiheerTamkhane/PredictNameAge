const button = document.querySelector("#btn");
const output = document.querySelector("#output");
const input = document.querySelector("#input");
// const key = "dbd99a6c-a120-40ee-b938-9688f5547fd7";
const URL = "https://api.agify.io";
// https://api.thecatapi.com/v1/images/search?breed_ids=beng

function getImage(text) {
  return URL + "?" + "name=" + text;
}

function errHandler(err) {
  alert("warning!", err);
}

function clickHandler() {
  let inputText = input.value;
  //calling server to get images
  fetch(getImage(inputText))
    .then((response) => response.json())
    .then((json) => {
      let ageOfName = json.age;
      output.innerHTML = `<p>Age of "${inputText}" is :${ageOfName}</p>`;
    })
    .catch(errHandler);
}

button.addEventListener("click", clickHandler);
