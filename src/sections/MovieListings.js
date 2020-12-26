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
    setInputValue(() => value);
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
      else {
        const resultsArray = response.data.Search;
        // loop through array and extract necessary information for display
        resultsArray.forEach(movie => {
          // 'Title' and 'Year' here should be capitalized per the API's structure
          const { Title, Year, imdbID } = movie;
          setMoviesData(previousValues => (
            [...previousValues, {title: Title, year: Year, id: imdbID}]
          ));
        });
      }
    }
    catch (error) {
      console.log(error);
      setErrorMessage('Something went wrong.');
    }
  }

  const nominateMovie = () => {
    console.log('nominated!');
  }

  return (
    <section className="sections__movie-listings">
      <Searchbar
        inputValue={inputValue}
        handleChange={handleChange}
      />
      {
        moviesData.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            nominate={nominateMovie}
          />
        ))
      }
      {
        errorMessage === 'Too many results.' && 
        <p>Too many results.</p>
      }
      {
        errorMessage === 'Movie not found!' && 
        <p>This movie cannot be found.</p>
      }
      {
        errorMessage === 'Something went wrong.' && 
        <p>Something went wrong, please try again in a few minutes.</p>
      }
    </section>
  );
}

export default MovieListings;