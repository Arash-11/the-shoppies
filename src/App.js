import React , { useState , useEffect } from 'react';
import './App.css';
import Heading from './components/Heading';
import Banner from './components/Banner';
import MovieCard from './components/MovieCard';
import MovieListings from './sections/MovieListings';
import Nominations from './sections/Nominations';
import MovieContext from './Context';

const App = () => {
  const [nominations, setNominations] = useState([]);

  // scroll to top of page when banner is displayed - useful when on a mobile device
  useEffect(() => {
    if (nominations.length === 5) {
      setTimeout(() => window.scrollTo(0, 0), 500);
    }
  }, [nominations]);

  const nominateMovie = (selectedMovie) => {
    // ensure nominations list does not add a duplicate
    const isAlreadyNominated = nominations.find(movie => movie.id === selectedMovie.id);
    if (isAlreadyNominated) return null;
    setNominations(previousValues => (
      [...previousValues, selectedMovie]
    ));
  }

  const removeNomination = (movieID) => {
    setNominations(nominations.filter(movie => movie.id !== movieID));
  }

  return (
    <MovieContext.Provider value={nominations}>
      <Heading />
      <div className={`sections ${nominations.length === 5 ? "sections--with-banner" : ""}`}>
        <Banner />
        <MovieListings nominateMovie={nominateMovie}/>
        <Nominations count={nominations.length}>
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
    </MovieContext.Provider>
  );
}

export default App;
