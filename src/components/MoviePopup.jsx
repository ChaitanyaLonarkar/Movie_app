import React from "react";

export default function MoviePopup(props) {
  const { data } = props;
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const m = data.pop();
  return (
    <>
      <div className="bg-opacity-25 mainpop position-fixed ">
          {/* <div className="close text-right">XXXXXX</div> */}
        <div className="popup ">
          <div className="lft">
            <img src={API_IMG + m?.poster_path} alt="" />
          </div>
          <div className="rgt">
            <h2>{m?.title}</h2>
            <p>{m?.overview}</p>
            <p>
              <b>Release Date : </b> {m?.release_date}
            </p>
            <button className=" btn btn-primary">Watch Trailer</button>
          </div>
        </div>
      </div>
    </>
  );
}
