import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  return (
    <div className={`movie-card ${props.buttonLabel === "remove" ? "nominations--animation" : ""}`}>
      <img
        src={props.imgSrc}
        className={`movie-card__img ${props.buttonLabel === "remove" ? "nominations--img" : ""}`}
        alt="Movie poster"
      />
      <div className="movie-card__text-content">
        <p className="movie-card__title">
          {props.title} <span>({props.year})</span>
        </p>
        <button 
          onClick={() => props.selectMovie(props.id)}
          className={`movie-card__button ${props.shouldFadeButton ? "button--fade" : ""}`}
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  buttonLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  title: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string,
  shouldFadeButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};

export default MovieCard;