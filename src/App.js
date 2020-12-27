import React , { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import MovieCard from './components/MovieCard';
import MovieListings from './sections/MovieListings';
import Nominations from './sections/Nominations';

const App = () => {
  const [nominations, setNominations] = useState([]);

  const nominateMovie = (selectedMovie) => {
    setNominations(previousValues => (
      [...previousValues, selectedMovie]
    ));
  }

  const removeNomination = (movieID) => {
    setNominations(() => (
      nominations.filter(movie => movie.id !== movieID)
    ));
  }

  return (
    <>
      <Heading />
      <div className="sections">
        <MovieListings nominateMovie={nominateMovie}/>
        <Nominations>
          {
            nominations.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                imgSrc={movie.img}
                title={movie.title}
                year={movie.year}
                buttonLabel='remove'
                selectMovie={removeNomination}
              />
            ))
          }
        </Nominations>
      </div>
    </>
  );
}

export default App;
