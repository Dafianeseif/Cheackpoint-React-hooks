import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="rating">
          <span>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
