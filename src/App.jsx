import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./components/Navbar";
import MoviePopup from "./components/MoviePopup";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query";

function App() {
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9"
      );
      const data = await response.json();
      console.log(data.results);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <Navbar sm={searchMovie}/>
      {/* <MoviePopup data={movie} /> */}
      <div className="container position-relative">
        {movie.map((item) => (
          <MovieBox data={item} />
        ))}
        {/* movie.poster_path
        <img src={API_IMG + movie?.poster_path} alt="" /> */}
      </div>
    </>
  );
}

export default App;
