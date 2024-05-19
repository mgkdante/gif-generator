const gif = document.getElementById("gif");
const getGifButton = document.getElementById("get-gif");
const searchGif = document.getElementById("search-gif");

const getGif = (search = "Dog") => {
  search = search === "" ? "Dog" : search;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=MmSgiAlZf3wYCkNypp2Af66bGspaOTVF&s=${search}`,
    {
      mode: "cors",
    },
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      gif.src = response.data.images.original.url;
    })
    .catch((error) => {
      gif.src = "https://media1.tenor.com/m/7hG_F7B2XccAAAAC/error.gif";
      console.log(error);
    });
};

getGif();

getGifButton.addEventListener("click", (event) => {
  const searchTerm = searchGif.value;
  getGif(searchTerm);
});
