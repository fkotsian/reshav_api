import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { getTopMovies } from './api/MovieApi';
// check for existing cards

function App() {

  return (
    <div>HELLO</div>
  );
}
{getTopMovies()}
ReactDOM.render(<App />, document.getElementById('root'));