import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "./API";
import axios from "react";
export default function MoviePopup(props) {
  const { data, show, id } = props;
  const [moviepop, setmoviepop] = useState([]);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const moviedata = await res.json();
    setmoviepop(moviedata);
    console.log(moviedata);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <>
      <div className="bg-opacity-25 mainpop position-fixed ">
        <div className="popup ">
          <div className="lft">
            <img src={API_IMG + moviepop?.poster_path} alt="" />
          </div>
          <div className="rgt">
            <h3>{moviepop?.title}</h3>
            <p className="text-start">{moviepop?.overview}</p>
            <p className="extra">
              <b>Release Date : </b> {moviepop?.release_date}
            </p>
            <p className="extra">
              <b>Movie Rating : </b> {moviepop?.vote_average} / 10
            </p>
            <div className="d-flex align-item-start gap-3">
              <button className=" btn btn-primary">Watch Trailer</button>
              <button className="btn btn-danger " onClick={() => show(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
