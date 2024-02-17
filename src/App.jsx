import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./components/Navbar";
import MoviePopup from "./components/MoviePopup";
import { LATEST, TRENDINGS } from "./components/API";
import { API_KEY } from "./components/API";
import { MOVIE_GENRES } from "./components/API";
import Pagination from "./components/Pagination";

const API_SEARCH =
"https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query";

function App() {
  const [query, setQuery]=useState('');
  const [movie, setMovie] = useState([]);
  const [Show, setShow] = useState(false);


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
    // trendings();
  }, []);

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      // console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  const changeHandler=(e)=>{
    setQuery(e.target.value);
    // console.log('This is from : ', query)
  }

  const trendings = async()=>{
    // e.preventDefault();
    try{
      const url=TRENDINGS;
      console.log("Trending",url) ;

      const res= await fetch(url);
      const data= await res.json();
      console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const latest = async()=>{
    // e.preventDefault();
    try{
      const url=LATEST;
      console.log("Trending",url) ;
      const res= await fetch(url);
      const data= await res.json();
      console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <Navbar sm={searchMovie} query={query} changeHandler={changeHandler} trendings={trendings} latest={latest} />
      {Show && <MoviePopup data={movie}  />}
      <div className="container ">
        {movie.map((item) => (
          <MovieBox data={item} show={setShow}/>
        ))}
       
      <Pagination/>
      </div>
    </>
  );
}

export default App;
