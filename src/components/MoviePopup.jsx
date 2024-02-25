import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "./API";
import axios from "react";
export default function MoviePopup(props) {
  const { data, show, id } = props;
  const [moviepop, setmoviepop] = useState([]);
  const [movieVideoId, setMovieVideoId] = useState();

  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const moviedata = await res.json();
    setmoviepop(moviedata);
    // console.log(moviedata);
  };
  useEffect(() => {
    fetchMovieDetails();
    fetchMovieVideoId();
  }, [id]);

  const fetchMovieVideoId = async () => {
    const vid = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    const rvid = await vid.json();

    for (let i = 0; i < rvid?.results.length; i++) {
      if (
        rvid?.results.name == "Official Trailer" ||
        "official trailer " ||
        "trailer" ||
        "Trailer"
      ) {
        setMovieVideoId(rvid?.results[i]?.key);
      }
      else{
        setMovieVideoId(rvid?.results[0]?.key);
      }
    }
    // setMovieVideoId(rvid?.results[0]?.key);
    console.log("ind", rvid);
  };

  const rate=Math.floor(moviepop?.vote_average)
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
              <b>Movie Rating : </b> {rate} / 10
            </p>
            <div className="d-flex align-item-start gap-3">
              <div className=" btn btn-primary">
                <a
                  href={`http://youtu.be/${movieVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </a>
              </div>
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
