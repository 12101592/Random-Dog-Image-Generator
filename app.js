const URL = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector(".button");
let image = document.querySelector(".image");

async function RandomImage() {
  let response = await fetch(URL);
  let data = await response.json();
  image.src = data.message;
}

button.addEventListener("click", () => {
  RandomImage();
});
