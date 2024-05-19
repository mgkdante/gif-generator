const gif = document.getElementById("gif");
const getGifButton = document.getElementById("get-gif");
const searchGif = document.getElementById("search-gif");

const getGif = async (search = "Dog") => {
  search = search === "" ? "Dog" : search;
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=MmSgiAlZf3wYCkNypp2Af66bGspaOTVF&s=${search}`,
      {
        mode: "cors",
      },
    );
    const gifData = await response.json();
    gif.src = gifData.data.images.original.url;
  } catch (error) {
    gif.src = "https://media1.tenor.com/m/7hG_F7B2XccAAAAC/error.gif";
    console.log(error);
  }
};

getGif();

getGifButton.addEventListener("click", (event) => {
  const searchTerm = searchGif.value;
  getGif(searchTerm);
});
