import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MovieListings from './MovieListings';
import MovieContext from '../Context';

afterEach(cleanup);

const nominationsArray = jest.fn(() => []);

jest.mock('axios');


// renders component without crashing
describe('renders component without crashing', () => {
  test('should render <MovieListings /> without crashing', () => {
    render(
      <MovieContext.Provider value={ nominationsArray }>
        <MovieListings />
      </MovieContext.Provider>
    );
  });
});


// behaviour when getMovieData function is succesful
describe('behaviour when getMovieData function is succesful', () => {
  // displays spinner when too many results are available
  test('should display spinner when error message is "Too many results."', async () => {
    axios.get.mockResolvedValue({
      data: {
        Error: 'Too many results.'
      }
    });
    render(
      <MovieContext.Provider value={ nominationsArray }>
        <MovieListings />
      </MovieContext.Provider>
    );
    const inputExample = 'a';
    // simulate user typing in letter/letters that has too many results.
    fireEvent.change(screen.getByPlaceholderText('Search for movies...'), { target: { value: inputExample } });
    const spinnerElement = await screen.findByTestId('spinner');
    expect(spinnerElement).toHaveClass('spinner');
  });


  // displays correct error message when no search results are found
  test('should display "No search results available." when errorMessage is "Movie not found!"', async () => {
    axios.get.mockResolvedValue({
      data: {
        Error: 'Movie not found!'
      }
    });
    render(
      <MovieContext.Provider value={ nominationsArray }>
        <MovieListings />
      </MovieContext.Provider>
    );
    const inputExample = 'aaaaaa';
    // simulate user typing in letter/letters that has no search results.
    fireEvent.change(screen.getByPlaceholderText('Search for movies...'), { target: { value: inputExample } });
    const noResultsElement = await screen.findByTestId('no-results');
    expect(noResultsElement).toHaveTextContent('No search results available.');
  });
});


// behaviour when getMovieData function results in an error
describe('behaviour when getMovieData function results in an error', () => {
  // displays correct error message when something goes wrong while fetching data from API
  test ('should display "Something went wrong, please try again later." when errorMessage is "Something went wrong."', async () => {
    axios.get.mockRejectedValue({
      error: 'Something went wrong.'
    });
    render(
      <MovieContext.Provider value={ nominationsArray }>
        <MovieListings />
      </MovieContext.Provider>
    );
    const inputExample = 'something';
    fireEvent.change(screen.getByPlaceholderText('Search for movies...'), { target: { value: inputExample } });
    const wentWrongElement = await screen.findByTestId('went-wrong');
    expect(wentWrongElement).toHaveTextContent('Something went wrong, please try again later.');
  });
});