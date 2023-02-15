const SEARCHAPI = "http://www.omdbapi.com/?apikey=e27e7ee0&s="
const MOVIEAPI = "http://www.omdbapi.com/?apikey=e27e7ee0&i="
const movieBox = document.querySelector("#movie-box")

// get search results as you type
document.querySelector("#search").addEventListener('keyup', function(event) {
   getMovies(SEARCHAPI + event.target.value)
})

// Get Movies
const getMovies = async(api) => {
   const response = await fetch(api)
   const data = await response.json()
   if(data.Response == 'True') showMovies(data.Search);
}

// Show movies in search bar
const showMovies = (data) => {
   data ? (movieBox.style.display="block") : (movieBox.style.display="none")
   movieBox.innerHTML = ""
   data.forEach((item) => {
   const IMDBID = item.imdbID;
   const box = document.createElement("div");
   box.dataset.id = item.imdbID  
   box.classList.add("box")
   box.innerHTML = `
      <a onclick="movieSelected('${item.imdbID}')" class="movie-dtls" href="movie.html">
         <img class="pstrImg" src="${item.Poster}" alt="" />
         <div class="title"> 
            <h2 class="pstrTtl">${item.Title}</h2>
            <span>${item.Year}<span>
         </div>
      </a>
      <button onclick="addToFav('${item.Title}', '${item.Poster}')" class="addToFav">Favourite</button>
   `;
   movieBox.appendChild(box);
   });
}

// Store Movie id in session storage
function movieSelected(id) {
   sessionStorage.setItem('movieID', id)
}

// Add movies to favourite using localstorage
const favMovieLocal = [];
const favMovie = JSON.parse(localStorage.getItem('favMovieList'));
for (let i = 0; i < favMovie.length; i++) {
   const favMovies = {
      title: favMovie[i].title,
      poster: favMovie[i].poster
   }
   favMovieLocal.push(favMovies);
}

function addToFav(favMovieTitle, favMoviePoster) { 
   const favMovie = {
      title: favMovieTitle,
      poster: favMoviePoster
   }
   favMovieLocal.push(favMovie);
   localStorage.setItem('favMovieList', JSON.stringify(favMovieLocal));
}
