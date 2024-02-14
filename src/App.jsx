import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9"
    );
    const data = response.results;
    console.log(data);
  };

  useEffect(() => {
    getMovies();
  }, [])
  
  return <>
  movie
  </>;
}

export default App;
