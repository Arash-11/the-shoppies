import React , { useState } from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import MovieCard from '../components/MovieCard';
const API_KEY = process.env.REACT_APP_API_KEY;

function MovieListings() {
  const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=`;

  // state for Searchbar input value
  const [inputValue, setInputValue] = useState('');

  const [moviesData, setMoviesData] = useState([]);

  // state for error messages that appear when running 'getMovieData' function
  const [errorMessage, setErrorMessage] = useState('');

  // this function runs when changes are made in the input field of 'Searchbar'
  const handleChange = (event) => {
    const {value} = event.target;
    // empty 'moviesData' array to prevent old information from being left displayed
    setMoviesData([]);
    // 'errorMessage' should be set to initial state to prevent old error messages from being left displayed
    setErrorMessage('');
    setInputValue(value);
    getMovieData(value);
  }

  const getMovieData = async (input) => {
    try {
      const response = await axios.get(`${endpoint}${input}`);
      if (response.data.Error === 'Too many results.') {
        setErrorMessage('Too many results.');
      }
      else if (response.data.Error === 'Movie not found!') {
        setErrorMessage('Movie not found!');
      }
      else displayMovieData(response);
    }
    catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong.');
    }
  }

  const displayMovieData = (apiResponse) => {
    const resultsArray = apiResponse.data.Search;
    // loop through array and extract necessary information for display
    (resultsArray || []).forEach(movie => {
      // 'Title', 'Year', 'Poster' here should be capitalized per the API's structure
      const { imdbID, Title, Year, Poster } = movie;
      setMoviesData(previousValues => (
        [...previousValues, {id: imdbID, title: Title, year: Year, img: Poster }]
      ));
    });
  }

  const nominateMovie = (movieID) => {
    // get movie info associated with this movieID from 'moviesData' array
    const selectedMovie = moviesData.find(movie => movie.id === movieID);
    console.log(selectedMovie);
  }

  return (
    <section className="sections__movie-listings">
      <Searchbar
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <div className="sections__movie-listings__content">
        {
          moviesData.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imgSrc={movie.img}
              title={movie.title}
              year={movie.year}
              nominate={nominateMovie}
            />
          ))
        }
        {
          errorMessage === 'Too many results.' && 
          <div className="spinner"></div>
        }
        {
          errorMessage === 'Movie not found!' && 
          <p className="sections__movie-listings__content__error">No search results available.</p>
        }
        {
          errorMessage === 'Something went wrong.' && 
          <p className="sections__movie-listings__content__error">Something went wrong, please try again later.</p>
        }
      </div>
    </section>
  );
}

export default MovieListings;