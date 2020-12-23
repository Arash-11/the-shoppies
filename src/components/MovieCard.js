import React from 'react';

function MovieCard() {
  return (
    <div className="movie-card">
      <div className="movie-card__text-content">
        <p className="movie-card__title">Movie title here <span>(Year)</span></p> 
        <button className="movie-card__button">Nominate</button>
      </div>
    </div>
  );
}

export default MovieCard;