import React , { useState } from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import MovieCard from '../components/MovieCard';
const API_KEY = process.env.REACT_APP_API_KEY;

function MovieListings() {
  // state for Searchbar input value
  const [inputValue, setInputValue] = useState('');

  const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=`;

  // this function runs when changes are made in the input field of Searchbar
  const handleChange = (event) => {
    const {value} = event.target;
    setInputValue(() => value);
    getMovieData(value);
  }

  const getMovieData = async (input) => {
    try {
      const response = await axios.get(`${endpoint}${input}`);
      if (response.data.Error === 'Too many results.') {
        console.log('too much info, cannot show');
      }
      else if (response.data.Error === 'Movie not found!') {
        console.log('movie cannot be found');
      }
      else {
        const resultsArray = response.data.Search;
        console.log(resultsArray);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="sections__movie-listings">
      <Searchbar
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <MovieCard />
    </section>
  );
}

export default MovieListings;