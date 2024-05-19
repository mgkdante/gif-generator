const gif = document.getElementById("gif");
const getGifButton = document.getElementById("get-gif");
const searchGif = document.getElementById("search-gif");

const getGif = (search = "Dog") => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=MmSgiAlZf3wYCkNypp2Af66bGspaOTVF&s=${search}`,
    {
      mode: "cors",
    },
  )
    .then((response) => response.json())
    .then((response) => {
      gif.src = response.data.images.original.url;
    });
};

getGif();

getGifButton.addEventListener("click", (event) => {
  const searchTerm = searchGif.value;
  getGif(searchTerm);
});
