import './App.css';
import Heading from './heading/Heading';
import MovieListings from './sections/MovieListings';
import Nominations from './sections/Nominations';

const App = () => {
  return (
    <>
      <Heading />
      <div className="sections">
        <MovieListings />
        <Nominations />
      </div>
    </>
  );
}

export default App;
