import React, { useState } from "react";
import "./MoviesList.css";
import MovieCard from "./MovieCard";

const movies = [
  { id: "734hbhfv", name: "Titanic", rating: 5, year: 1999 }, // 0
  { id: "8sdjhbfk", name: "Fast X", rating: 3, year: 2023 }, // 1
  { id: "nbadf87", name: "Avatar", rating: 3, year: 2009 } // 2
];

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState(movies);

  const deleteMovie = movieId => {
    if (movieId) {
      setMoviesList(moviesList.filter(movie => movie.id !== movieId));
    }
  };

  const sortMovies = () => {
    // setMoviesList([...moviesList].sort((a, b) => a.year - b.year))
    setMoviesList(prevList => {
      return [...prevList].sort((a, b) => a.year - b.year);
    });
  };

  const addMovie = () => {
    setMoviesList(prevList => [
      ...prevList,
      { id: "usfkladj", name: "My Movie", year: 2023, rating: 5 }
    ]);
  };

  return (
    <div className="movies-list">
      <button onClick={sortMovies}>Sort by year</button>
      <button onClick={addMovie}>Add movie</button>

      {moviesList.map(movie => (
        // key={`${movie.name}-${movie.year}`
        <MovieCard {...movie} key={movie.id} onDelete={deleteMovie} />
      ))}
    </div>
  );
}
