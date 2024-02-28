import { useLayoutEffect, useState, useRef, useEffect } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./components/Navbar";
import MoviePopup from "./components/MoviePopup";
import { LATEST, TRENDINGS } from "./components/API";
import { API_KEY } from "./components/API";
import {
  MOVIE_GENRES,
  SEARCH_MOVIES,
  FILTERED_MOVIES_WITH_GENRES,
} from "./components/API";
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
    // bs();
    // fetchGenres()
    // searchMovie();
  }, [currentPage]);

  // useEffect(() => {
  //   bs();
  // }, []);
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
      document.getElementById("trend").classList.add("active");
    } catch (e) {
      console.log(e);
    }
  };

  const fetchGenres = async () => {
    const genre = await fetch(MOVIE_GENRES);
    const re = await genre.json();
    // console.log("fetch movei",re.genres[0].id)
    setGenre(re.genres);

    const movies = await fetch(LATEST(currentPage));
    const data = await movies.json();
    setMovie(data.results);
    document.getElementById("movie").classList.add("active");

    // const data  = await fetch(
    //   FILTERED_MOVIES_WITH_GENRES(currentPage, re.genres.id)
    // );
    // const reGenre = await data.json();
    // console.log(reGenre);
    // setMovie(data.results);
  };

  // const ref=useRef();
  // const bs=()=>{
  //   const c=document.getElementsByClassName("containerr")
  //   genre==""?c.style.margin="100px":c.style.margin="100px"
  //   // genre == "" ? ref.current.style.margin="1px" : ref.current.style.margin="100px";
  //   alert("bs si calling")
  // }
  // bs()


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
      {genre == "" ? null : (
        <MovieGenres page={currentPage} data={genre} setMovie={setMovie} />
      )}

      <div className="containerr " >
        {movie.map((item) => (
          <MovieBox data={item} show={setShow} id={setmovieId} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default App;
