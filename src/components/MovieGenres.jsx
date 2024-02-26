import React from "react";
import { useState } from "react";
import { FILTERED_MOVIES_WITH_GENRES } from "./API";
export default function MovieGenres(props) {
const [genreId, setgenreId] = useState();
    // const changeHandler = (e) => {
    //     console.log("Ye hai genere id",e.target.key);

    //     setgenreId(e.target.key);
    //     // console.log('This is from : ', query)
    //   };
// changeHandler()
  const handleGenre = async () => {
    const data = await fetch(
      FILTERED_MOVIES_WITH_GENRES(currentPage, props.data.id)
    );
    const reGenre = await data.json();
  };
  return (
    <div className="d-flex flex-wrap  genres">
      {props.data.map((item) => (
        <button className="btn" onClick={handleGenre} key={item.id}>{item?.name}</button>
      ))}
    </div>
  );
}
