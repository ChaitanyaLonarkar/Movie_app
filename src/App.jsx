import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./components/Navbar";
import MoviePopup from "./components/MoviePopup";
import { LATEST, TRENDINGS } from "./components/API";
import { API_KEY } from "./components/API";
import { MOVIE_GENRES ,SEARCH_MOVIES } from "./components/API";
import Pagination from "./components/Pagination";

// const API_SEARCH =
// "https://api.themoviedb.org/3/search/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&query";

function App() {
  const [query, setQuery]=useState('');
  const [movie, setMovie] = useState([]);
  const [Show, setShow] = useState(false);
  const [movieId, setmovieId] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // const getMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setMovie(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  //   // trendings();
  // }, []);

  useEffect(()=>{
    trendings();
    // searchMovie();
    // latest();
  },[currentPage])

  const searchMovie = async(e)=>{
    // e.preventDefault();
    console.log("Searching");
    try{
      const url=SEARCH_MOVIES(currentPage,query);
      console.log(url)
      const res= await fetch(url);
      const data= await res.json();
      console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  const changeHandler=(e)=>{
    setQuery(e.target.value);
    console.log('This is from : ', query)
  }

  const trendings = async()=>{
    // e.preventDefault();
    try{
      const url=TRENDINGS(currentPage);
      // console.log("Trending",url) ;

      const res= await fetch(url);
      const data= await res.json();
      // console.log("hhhhhhhhhhhhhh",data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  // const latest = async()=>{
  //   // e.preventDefault();
  //   try{
  //     const url=LATEST;
  //     // console.log("Trending",url) ;
  //     const res= await fetch(url);
  //     const data= await res.json();
  //     // console.log("hhhhhhhhhhhhhh",data);
  //     setMovie(data.results);
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }


  return (
    <>
      <Navbar sm={searchMovie} query={query} changeHandler={changeHandler}  />
      {Show && <MoviePopup data={movie} show={setShow} id={movieId}/>}
      <div className="containerr ">
        {movie.map((item) => (
          <MovieBox data={item} show={setShow} id={setmovieId}/>
        ))}
       
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  );
}

export default App;
