import { useLayoutEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./components/Navbar";
import MoviePopup from "./components/MoviePopup";
import { LATEST, TRENDINGS } from "./components/API";
import { API_KEY } from "./components/API";
import { MOVIE_GENRES, SEARCH_MOVIES } from "./components/API";
import Pagination from "./components/Pagination";
import MovieGenres from "./components/MovieGenres";

// const API_SEARCH =
// "https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query";

function App() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [Show, setShow] = useState(false);
  const [movieId, setmovieId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState([]);


  useLayoutEffect(() => {
    trendings();
    // searchMovie();
  }, [currentPage]);

  const searchMovie = async (e) => {
    // console.log("Searching");
    try {
      const url = SEARCH_MOVIES(currentPage, query);
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      // console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
    // console.log('This is from : ', query)
  };

  const trendings = async () => {
    try {
      const url = TRENDINGS(currentPage);
      // console.log("Trending",url) ;
      const res = await fetch(url);
      const data = await res.json();
      // console.log("hhhhhhhhhhhhhh",data);
      console.log(data);

      setMovie(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  // const fetchLatest = async () => {
  //   const { data: movies } = await fetchData(LATEST(currentPage));
  //   const data = await movies.json();
  //   setMovie(data.results);
  //   // setLatestTotalPages(data.total_pages);
  // };

  const fetchGenres = async () => {
    const genre  = await fetch(MOVIE_GENRES);
    const re = await genre.json();
    // console.log("fetch movei",re.g)
    setGenre(re.genres);

    const { data } = await fetch(
      FILTERED_MOVIES_WITH_GENRES(currentPage, id)
    );
    setMovie(data.results);
  };


  return (
    <>
      <Navbar
        sm={searchMovie}
        query={query}
        changeHandler={changeHandler}
        trendings={trendings}
        fetchGenres={fetchGenres}
      />
      {Show && <MoviePopup data={movie} show={setShow} id={movieId} />}
      { (genre=="")?null:<MovieGenres data={genre} />}

      <div className="containerr ">
        {movie.map((item) => (
          <MovieBox data={item} show={setShow} id={setmovieId} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
