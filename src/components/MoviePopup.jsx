import React from "react";
import { useState } from "react";

export default function MoviePopup(props) {
  const { data, show, id } = props;
  const [moviepop, setmoviepop] = useState();
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  // const m = data.pop();
  const exactMovie = () => {
    for (let i = 0; i <=data.length; i++) {
      if (id==data[i].id) {
        setmoviepop(data[i]);
        console.log("%%%=============================%%%%%%%%%%%%%%%%%%%%%")
        console.log(data[i])
      }
      // else{console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")}
    }
  };
  exactMovie()
  return (
    <>
      {/* <div className="bg-opacity-25 mainpop position-fixed ">
        <div className="popup ">
          <div className="lft">
            <img src={API_IMG + m?.poster_path} alt="" />
          </div>
          <div className="rgt">
            <h2>{m?.title}</h2>
            <br />
            <p className="text-start">{m?.overview}</p>
            <p>
              <b>Release Date : </b> {m?.release_date}
            </p>
            <div className="d-flex align-item-start gap-3">
              <button className=" btn btn-primary">Watch Trailer</button>
              <button className="btn btn-danger " onClick={() => show(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-opacity-25 mainpop position-fixed ">
        <div className="popup ">
          <div className="lft">
            <img src={API_IMG + moviepop?.poster_path} alt="" />
          </div>
          <div className="rgt">
            <h2>{moviepop?.title}</h2>
            <br />
            <p className="text-start">{moviepop?.overview}</p>
            <p>
              <b>Release Date : </b> {moviepop?.release_date}
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
