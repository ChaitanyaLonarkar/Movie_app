import React from "react";

export default function MovieBox(props) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const { data ,show } = props;
  return (
    <>
      <div className="moviebox" onClick={show(false)} >
        <div className="img">
          <img src={API_IMG + data.poster_path} alt="" />
        </div>
        <h6>{data.title}</h6>
        {/* <div className="details">
          <p>
            <b>Release date : </b>
            {data.release_date}
          </p>
          <p>
            <b>Description : </b>
            {data.overview}
          </p>
          <p>
            <b>Original language : </b>
            {data.original_language}
          </p>
        </div> */}
      </div>
    </>
  );
}
