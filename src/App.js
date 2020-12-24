import './App.css';
import Heading from './heading/Heading';
import Searchbar from './components/Searchbar';
import MovieCard from './components/MovieCard';

const App = () => {
  return (
    <>
      <Heading />
      <Searchbar />
      <MovieCard />
    </>
  );
}

export default App;
