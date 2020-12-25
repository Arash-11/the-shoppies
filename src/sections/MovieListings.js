import React from 'react';
import Searchbar from '../components/Searchbar';
import MovieCard from '../components/MovieCard';

function MovieListings() {

  return (
    <div className="sections__movie-listings">
      <Searchbar />
      <MovieCard />
    </div>
  );
}

export default MovieListings;