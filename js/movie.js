const MOVIEAPI = "http://www.omdbapi.com/?apikey=e27e7ee0&i="
const movieInfo = document.querySelector("#movie-info")
const addToFav = document.querySelector('#addToFav');

// show movie details in a details page
const showMovieDetails = (movie) => {
   movieInfo.innerHTML =  `
   <img class="moviePoster" src="${movie.Poster}">
   <div class="movie-details">
   <h2 class="movieTitle">${movie.Title}</h2>
   <div class="miStrip">
      <span>${movie.Released}</span>
      <span>${movie.Genre}</span>
      <span>${movie.Runtime}</span>
   </div>
   <div class="imdbrat">
      IMBD: <span>${movie.imdbRating}</span>
   </div>
   <p>${movie.Plot}</p>
   <span class="lang">Language: ${movie.Language}</span>
   <span class="director">Director: ${movie.Director}</span>
   </div>
   `
}

// get movie details once someone click on the movie search results
const getMovieDetails = async(api) => {
   const response = await fetch(api)
   const data = await response.json()
   showMovieDetails(data);
}

function loadMovieDetails(){
   const movieid = sessionStorage.getItem('movieID');
   getMovieDetails(MOVIEAPI + movieid)
}

loadMovieDetails();
