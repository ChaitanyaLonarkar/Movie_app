import React from "react";
import { useState, useEffect,useRef } from "react";
import { FILTERED_MOVIES_WITH_GENRES } from "./API";
export default function MovieGenres(props) {
  const [genreId, setgenreId] = useState();
  const changeColor = (e) => {
    e.target.style.backgroundColor = "red"
    // console.log("Ye hai genere id", e.target.key);
    // setgenreId(e.target.key);
    // console.log('This is from : ', query)
  };
  // changeHandler();
  // useEffect(() => {
  //   handleGenre();
  // }, []);

  const btnRef = useRef()

  const handleGenre = async () => {
    const dataa = await fetch(FILTERED_MOVIES_WITH_GENRES(props.page, genreId));
    console.log(genreId)
    const reGenre = await dataa.json();
    // if (genreId != undefined) {
      props.setMovie(reGenre.results);
      // alert("undefiner nhi h")
      
    // }
    console.log("ggggggggggggg", reGenre);
    btnRef.current.style.backgroundColor = "red";
  
  };
  return (
    <div className="d-flex flex-wrap  genres">
      {props.data.map((item) => (
        <button
          className="btn"

          onClick={() => {
            handleGenre();
            setgenreId(item?.id);
            changeColor();
            
          }}
          key={item?.id}
          ref={btnRef}
        >
          {item?.name} {item?.id}
        </button>
      ))}
    </div>
  );
}
