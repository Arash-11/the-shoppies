import React , { useState , useContext } from 'react';
import MovieContext from '../Context';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import MovieCard from '../components/MovieCard';
import imagePlaceholder from '../image-na.jpg';
const API_KEY = process.env.REACT_APP_API_KEY;

function MovieListings(props) {
  const endpoint = `http://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;

  // state for Searchbar input value
  const [inputValue, setInputValue] = useState('');

  const [moviesData, setMoviesData] = useState([]);

  // state for error messages that appear when running 'getMovieData' function
  const [errorMessage, setErrorMessage] = useState('');

  const nominationsArray = useContext(MovieContext);

  const isNominationsListCompleted = nominationsArray.length === 5;

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
      // limiting OMDb API search results to 5 pages
      for (let i = 1; i < 6; i++) {
        const response = await axios.get(`${endpoint}&s=${input}&page=${i}`);
        if (response.data.Error === 'Too many results.') {
          setErrorMessage('Too many results.');
        }
        else if (response.data.Error === 'Movie not found!') {
          setErrorMessage('Movie not found!');
        }
        else displayMovieData(response);
      }
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
      if (Poster === 'N/A') {
        setMoviesData(previousValues => (
          [
            ...previousValues, 
            { id: imdbID, title: Title, year: Year, img: imagePlaceholder}
          ]
        ));
      } else {
        setMoviesData(previousValues => (
          [
            ...previousValues, 
            { id: imdbID, title: Title, year: Year, img: Poster }
          ]
        ));
      }
    });
  }

  const selectMovie = (movieID) => {
    if (isNominationsListCompleted) return null;
    // get movie info associated with this movieID from 'moviesData' array
    const selectedMovie = moviesData.find(movie => movie.id === movieID);
    props.nominateMovie(selectedMovie);
  }

  return (
    <section className="sections__movie-listings">
      <Searchbar
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <div className={`sections__movie-listings__content ${isNominationsListCompleted ? "movie-listings--banner" : ""}`}>
        {
          moviesData.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imgSrc={movie.img}
              title={movie.title}
              year={movie.year}
              buttonLabel='nominate'
              selectMovie={selectMovie}
              shouldFadeButton={
                nominationsArray.find(item => item.id === movie.id) || isNominationsListCompleted
              }
            />
          ))
        }
        {
          inputValue === '' &&
          <p className="sections__movie-listings__content__placeholder">Search for movies to add to nomination list.</p>
        }
        {
          errorMessage === 'Too many results.' && moviesData.length < 1 &&
          <div className="spinner"></div>
        }
        {
          errorMessage === 'Movie not found!' && moviesData.length < 1 &&
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