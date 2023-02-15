const movieWrap = document.querySelector('.movieWrap');
const favMovie = JSON.parse(localStorage.getItem('favMovieList'));

function addToFavPage() {
   for (let i = 0; i < favMovie.length; i++) {
      let movieTitle = favMovie[i].title
      let moviePoster = favMovie[i].poster
      const card = document.createElement('div');
      card.classList.add('movieCrd');
      card.innerHTML=`
      <img src="${moviePoster}" alt="">
      <button onclick="removeFav('${movieTitle}');">Remove
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      </button>
      `;
      movieWrap.appendChild(card);
   }
}

function removeFav(movieTitle) {
   document.location.reload()
   const favMovieLocal = [];
   const favMovie = JSON.parse(localStorage.getItem('favMovieList'));

   for (let i = 0; i < favMovie.length; i++) {
      if (favMovie[i].title !== movieTitle) {
         const favMovies = {
            title: favMovie[i].title,
            poster: favMovie[i].poster
         }
         favMovieLocal.push(favMovies);
      }
   }

   localStorage.setItem('favMovieList', JSON.stringify(favMovieLocal));
   favMovieLocal = [];
   addToFavPage()
}

addToFavPage()
