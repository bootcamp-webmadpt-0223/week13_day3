import React from "react";

export default function MovieCard(props) {
  return (
    <div className="movie">
      <p>
        {props.name} <span>{props.rating} ⭐️</span>
      </p>
      <p>{props.year}</p>
      <button
        onClick={event => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
