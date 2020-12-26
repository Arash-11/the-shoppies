import React from 'react';

function MovieCard(props) {
  return (
    <div className="movie-card">
      <div className="movie-card__text-content">
        <p className="movie-card__title">
          {props.title} <span>({props.year})</span>
        </p> 
        <button className="movie-card__button" onClick={props.nominate}>
          Nominate
        </button>
      </div>
    </div>
  );
}

export default MovieCard;