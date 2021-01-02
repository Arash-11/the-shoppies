import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MovieContext from '../Context';
import MovieListings from './MovieListings';

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



// behaviour when getMovieData function is successful
describe('behaviour when getMovieData function is successful', () => {
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
    // simulate user typing in letter/letters that has too many results.
    userEvent.type(screen.getByPlaceholderText('Search for movies...'), 'a');
    const spinnerElement = await screen.findByTestId('spinner');
    await waitFor(() => expect(spinnerElement).toHaveClass('spinner'));
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
    // simulate user typing in letter/letters that has no search results.
    userEvent.type(screen.getByPlaceholderText('Search for movies...'), 'aaaaaa');
    const noResultsElement = await screen.findByTestId('no-results');
    await waitFor(() => expect(noResultsElement).toHaveTextContent('No search results available.'));
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
    userEvent.type(screen.getByPlaceholderText('Search for movies...'), 'something');
    const wentWrongElement = await screen.findByTestId('went-wrong');
    await waitFor(() => {
      expect(wentWrongElement).toHaveTextContent('Something went wrong, please try again later.');
    });
  });
});