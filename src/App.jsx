import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieBox from "./MovieBox";


const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query";

function App() {
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9"
      )
      const data= await response.json();
      console.log(data.results );
      setMovie(data.results);
      // console.log(movie);

        // .then((response) => response.json())
        // .then(data => {
        //   setMovie(data.results);
        //   console.log(data.results);
        // });
      // console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  // const eg=["name","surname"]

  return (
    <>
      <div className="container">
        {movie.map((item)=><MovieBox data={item}/>)}
        {/* movie.poster_path
        <img src={API_IMG + movie?.poster_path} alt="" /> */}
      </div>
    </>
  );
}

export default App;
