# The Shoppies: Movie awards for entrepreneurs

<br />

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed93fcc2-9687-484a-859c-4ab6ef610ab1/deploy-status)](https://app.netlify.com/sites/shoppies11/deploys)
![Website](https://img.shields.io/website?down_color=grey&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fshoppies11.netlify.app%2F)
![GitHub top language](https://img.shields.io/github/languages/top/Arash-11/the-shoppies)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Arash-11/the-shoppies)
![GitHub repo size](https://img.shields.io/github/repo-size/Arash-11/the-shoppies)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Arash-11/the-shoppies)

Live site: https://shoppies11.netlify.app/

![Preview image of website](https://github.com/Arash-11/organizr/blob/main/the-shoppies.png)

<br />

## About the project

A webpage that can search [OMDB](http://www.omdbapi.com/) for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

The webpage should have a simple interface that makes it easy to:

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has been deployed on Netlify.

<br />

## Technical requirements:

[x] Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).

[x] Each search result should list at least its title, year of release and a button to nominate that film.

[x] Updates to the search terms should update the result list.

[x] Movies in search results can be added and removed from the nomination list.

[x] If a search result has already been nominated, disable its nominate button.

[x] Display a banner when the user has 5 nominations.

<br />

## Technologies used

- HTML / SCSS
- React
- Jest
- React Testing Library
- OMDb API
- Netlify

<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
