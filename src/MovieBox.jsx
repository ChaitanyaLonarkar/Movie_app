import React from "react";

export default function MovieBox(props) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const { data ,show,id } = props;

  
  return (
    <>
      <div className="moviebox" >
        <div className="img">
          <img src={API_IMG + data.poster_path} alt={data.title} />
        </div>
        <h6>{data.title}</h6>
        <button className="detail-btn btn-success p-1 mt-1  mb-3" key={data.id} onClick={()=>{show(true);id(data.id)}}>View More</button>
      </div>
    </>
  );
}
