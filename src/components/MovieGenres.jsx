import React from 'react'

export default function MovieGenres(props) {
  return (
    <div className='d-flex flex-wrap  genres'>
        {props.data.map((item) => (
            <button className='btn'>{item?.name}</button>
        ))}
    </div>
  )
}
