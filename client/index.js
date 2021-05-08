import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { getTopMovies } from './api/MovieApi';
import { MovieGrid } from './components/MovieGrid';
// check for existing cards

function App() {

  return (
    <MovieGrid />
  );
}
{getTopMovies()}
ReactDOM.render(<App />, document.getElementById('root'));