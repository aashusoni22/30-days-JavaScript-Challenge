const mainContent = document.querySelector("main");
const logo = document.querySelector(".title");
const categoryTitle = document.querySelector(".content-title");
const nowPlaying = document.querySelector("#now-playing");
const trending = document.querySelector("#popular");
const topRated = document.querySelector("#top-rated");
const upcoming = document.querySelector("#upcoming");
const searchMovie = document.querySelector("#search-movie");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalPoster = document.getElementById("modalPoster");
const modalGenres = document.getElementById("modalGenres");
const modalRating = document.getElementById("modalRating");
const modalOverview = document.getElementById("modalOverview");
const closeModal = document.getElementsByClassName("close")[0];
const modalCast = document.querySelector("#modalCast");
const modalDirector = document.querySelector("#modalDirector");

let category = `popular`;
let page = 1;
let totalPages = 1;

async function showMovieModal(movie, movieId) {
  // Fetch movie details
  const creditsResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQyMThkOTZmYjk5ZWJkNWNmMDJkNzBkYTZmOTQzOCIsIm5iZiI6MTcyMzA2MjA5OS42MjIwODYsInN1YiI6IjY2YjNkNmQ5N2RmMjFiNzZmZTU4ZjFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLLNYlR5lX18RMhLSfaIi1OQEcK9iLlqfpI10I_TpVE", // Replace with your actual API key
      },
    }
  );

  const movieCredits = await creditsResponse.json();
  console.log(movieCredits);

  const cast = movieCredits.cast.slice(0, 3);
  console.log(cast);

  const director = movieCredits.crew.find(
    (member) => member.known_for_department === "Directing"
  );

  modal.style.display = "block";

  modalTitle.innerText = `${movie.original_title} (${new Date(
    movie.release_date
  ).getFullYear()})`;

  modalPoster.src = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

  // Clear the genres and cast before adding new content
  modalGenres.innerHTML = "";
  modalCast.innerHTML = "";
  modalDirector.innerHTML = "";

  const genres = movie.genre_names;
  genres.forEach((genre) => {
    const list = document.createElement("li");
    list.className = "modal-genres-list";
    list.textContent = genre;
    modalGenres.appendChild(list);
  });

  modalRating.innerHTML = `<span style="font-weight: 500">Rating</span> <p class="movie-rating-modal">${movie.vote_average.toFixed(
    1
  )}</p>`;
  modalOverview.innerHTML = `${movie.overview} <a style= "color: #f1aa03; text-decoration: underline; cursor:pointer">Read more...</a>`;

  cast.forEach((actor) => {
    const castContainer = document.createElement("div");
    castContainer.className = "cast-container";

    const castProfile = document.createElement("img");
    castProfile.className = "cast-profile";
    castProfile.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;

    const castName = document.createElement("li");
    castName.className = "cast-name";
    castName.innerText = actor.name;

    castContainer.appendChild(castProfile);
    castContainer.appendChild(castName);

    modalCast.appendChild(castContainer);
  });

  const directorContainer = document.createElement("div");
  directorContainer.className = "dirc-container";

  const dircProfile = document.createElement("img");
  dircProfile.className = "dirc-profile";
  dircProfile.src = `https://image.tmdb.org/t/p/w200${director.profile_path}`;

  const dircName = document.createElement("li");
  dircName.className = "dirc-name";
  dircName.innerText = director.name;

  directorContainer.appendChild(dircProfile);
  directorContainer.appendChild(dircName);

  modalDirector.appendChild(directorContainer);
}

// Close the modal when the user clicks on the 'x'
// closeModal.onclick = function () {
//   modal.style.display = "none";
// };

// Close the modal when the user clicks outside of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function handleCategory() {
  const categories = [nowPlaying, trending, topRated, upcoming];

  categories.forEach(function (categoryButton) {
    categoryButton.addEventListener("click", function () {
      searchMovie.value = "";
      page = 1;
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Remove the "active" class from all buttons
      categories.forEach((btn) => btn.classList.remove("active"));

      // Add the "active" class to the clicked button
      this.classList.add("active");

      // Update the category and title
      category = this.id.replace("-", "_");
      categoryTitle.innerHTML = this.innerHTML;

      // Fetch and display movies
      fetchMovieData();
    });
  });
}

function navigatePage(direction) {
  if (direction == "forward" && totalPages > page) {
    page++;
  } else if (direction == "backward" && page > 1) {
    page--;
  }
  udpateDirectionBtns();
  fetchMovieData();
}

const udpateDirectionBtns = () => {
  forward.disabled = page >= totalPages;
  backward.disabled = page <= 1;
};

forward.addEventListener("click", () => {
  navigatePage("forward");
});

backward.addEventListener("click", () => {
  navigatePage("backward");
});

const fetchGenres = async function () {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQyMThkOTZmYjk5ZWJkNWNmMDJkNzBkYTZmOTQzOCIsIm5iZiI6MTcyMzA2MjA5OS42MjIwODYsInN1YiI6IjY2YjNkNmQ5N2RmMjFiNzZmZTU4ZjFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLLNYlR5lX18RMhLSfaIi1OQEcK9iLlqfpI10I_TpVE", // Replace with your actual API key
    },
  };

  const response = await fetch(url, options);
  const genreData = await response.json();
  return genreData.genres;
};

const fetchMovieData = async function () {
  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQyMThkOTZmYjk5ZWJkNWNmMDJkNzBkYTZmOTQzOCIsIm5iZiI6MTcyMzA2MjA5OS42MjIwODYsInN1YiI6IjY2YjNkNmQ5N2RmMjFiNzZmZTU4ZjFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLLNYlR5lX18RMhLSfaIi1OQEcK9iLlqfpI10I_TpVE", // Replace with your actual API key
    },
  };

  // Fetch genres
  const genres = await fetchGenres();

  const genreDict = {};
  genres.forEach((genre) => {
    genreDict[genre.id] = genre.name;
  });

  // Fetch movies
  const response = await fetch(url, options);
  const data = await response.json();
  totalPages = data.total_pages;
  const movieData = data.results;

  // Clear existing content
  mainContent.innerHTML = "";

  const moviesDiv = document.createElement("div");
  moviesDiv.className = "movies-div";

  movieData.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const posterEle = document.createElement("img");
    posterEle.className = "movie-poster";

    const titleEle = document.createElement("p");
    titleEle.className = "movie-title";
    titleEle.title = movie.original_title;

    const genresEle = document.createElement("p");
    genresEle.className = "genres";

    const ratingEle = document.createElement("p");
    ratingEle.className = "movie-rating";

    const moreInfo = document.createElement("span");
    moreInfo.innerHTML = `<i class="fa-solid fa-circle-info" style="color: #ff4350; font-size: 33px;"></i>`;
    moreInfo.className = "more-info";

    const releaseDate = new Date(movie.release_date);
    const year = releaseDate.getFullYear();

    posterEle.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

    titleEle.textContent =
      movie.original_title.length > 22
        ? `${movie.original_title.slice(0, 18)}.. (${year})`
        : `${movie.original_title} (${year})`;

    const movieGenres = movie.genre_ids.map((id) => genreDict[id]).join(", ");
    genresEle.textContent = movieGenres;
    ratingEle.textContent = movie.vote_average.toFixed(1);

    movieCard.appendChild(ratingEle);
    movieCard.appendChild(posterEle);
    movieCard.appendChild(titleEle);
    movieCard.appendChild(genresEle);
    movieCard.appendChild(moreInfo);
    moviesDiv.appendChild(movieCard);
    movieCard.addEventListener("click", () => {
      const modalGenres = movie.genre_ids.map((id) => genreDict[id]);
      movie.genre_names = modalGenres;
      showMovieModal(movie, movie.id);
    });
  });
  // Attach the click event listener to open the modal

  mainContent.appendChild(moviesDiv);
  udpateDirectionBtns();
};

const searchQuery = async function () {
  if (searchMovie.value.trim() !== "") {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie.value}&include_adult=false&language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQyMThkOTZmYjk5ZWJkNWNmMDJkNzBkYTZmOTQzOCIsIm5iZiI6MTcyMzA2MjA5OS42MjIwODYsInN1YiI6IjY2YjNkNmQ5N2RmMjFiNzZmZTU4ZjFiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLLNYlR5lX18RMhLSfaIi1OQEcK9iLlqfpI10I_TpVE", // Replace with your actual API key
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const movieData = data.results;
      totalPages = data.total_pages;

      console.log(movieData);

      if (!movieData || movieData.length === 0) {
        categoryTitle.innerHTML = `No results found for "${searchMovie.value}"`;
        mainContent.innerHTML = "";
        forward.disabled = true;
        backward.disabled = true;
        return;
      }

      const genres = await fetchGenres();

      const genreDict = {};
      genres.forEach((genre) => {
        genreDict[genre.id] = genre.name;
      });

      const backBtn = document.createElement("i");
      backBtn.classList = "fa-solid fa-angle-left";
      backBtn.style.color = "#ff4350";

      // Clear existing content
      mainContent.innerHTML = "";
      categoryTitle.innerHTML = "";
      categoryTitle.appendChild(backBtn);

      const resultsText = document.createTextNode(
        ` Results for "${searchMovie.value}"`
      );
      categoryTitle.appendChild(resultsText);

      const moviesDiv = document.createElement("div");
      moviesDiv.className = "movies-div";

      movieData.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";

        const posterEle = document.createElement("img");
        posterEle.className = "movie-poster";

        const titleEle = document.createElement("p");
        titleEle.className = "movie-title";
        titleEle.title = movie.original_title;

        const genresEle = document.createElement("p");
        genresEle.className = "genres";

        const ratingEle = document.createElement("p");
        ratingEle.className = "movie-rating";

        const releaseDate = new Date(movie.release_date);
        const year = releaseDate.getFullYear();

        const moreInfo = document.createElement("span");
        moreInfo.innerHTML = `<i class="fa-solid fa-circle-info" style="color: #ff4350; font-size: 33px;"></i>`;
        moreInfo.className = "more-info";

        posterEle.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

        titleEle.textContent =
          movie.original_title.length > 22
            ? `${movie.original_title.slice(0, 18)}.. (${year})`
            : `${movie.original_title} (${year})`;

        const movieGenres = movie.genre_ids
          .map((id) => genreDict[id])
          .join(", ");
        genresEle.textContent = movieGenres;
        ratingEle.textContent = movie.vote_average.toFixed(1);

        movieCard.appendChild(ratingEle);
        movieCard.appendChild(posterEle);
        movieCard.appendChild(titleEle);
        movieCard.appendChild(genresEle);
        movieCard.appendChild(moreInfo);
        moviesDiv.appendChild(movieCard);
        movieCard.addEventListener("click", () => {
          const modalGenres = movie.genre_ids.map((id) => genreDict[id]);
          movie.genre_names = modalGenres;
          showMovieModal(movie, movie.id);
        });
      });

      mainContent.appendChild(moviesDiv);
    } catch (error) {
      console.error("An error occurred:", error);
      console.log(
        "There was an error fetching the data. Please try again later."
      );
    }
    udpateDirectionBtns();
  } else {
    alert("Please type a title");
  }
};

searchMovie.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchQuery();
  }
});

// Initialize category switching
handleCategory();

// Initial fetch for default category
fetchMovieData();
