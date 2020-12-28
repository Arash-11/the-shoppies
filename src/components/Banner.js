import React, { useContext } from 'react';
// import MovieContext from '../MovieContext';

function Banner() {
  // const nominationsArray = useContext(MovieContext);
  return (
    <>
      <p className="banner"> Great! You have nominated 5 movies!</p>
    </>
  );
}

export default Banner;

// {
//   nominationsArray.length === 5 &&
//   <p className="banner"> Great! You have nominated 5 movies!</p>
// }