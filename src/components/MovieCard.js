import React from 'react';

function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.imgSrc} className="movie-card__img" alt="Movie poster" />
      <div className="movie-card__text-content">
        <p className="movie-card__title">
          {props.title} <span>({props.year})</span>
        </p> 
        <button className="movie-card__button" onClick={props.nominate}>
          nominate
        </button>
      </div>
    </div>
  );
}

export default MovieCard;