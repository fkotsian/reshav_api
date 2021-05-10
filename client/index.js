import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { getTopMovies } from './api/MovieApi';
import { MovieGrid } from './components/MovieGrid';
import { Button, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// check for existing cards

function App() {

  return (
    <div>
      <h2><b>Movie App</b></h2>
        <div>
          <TextField id="outlined-basic" label="Search Movies" variant="outlined" />
          <Button onClick={()=>{console.log("Search movies")}} style={{"background-color":"purple", "margin-left": "10px", "height":"55px"}}> <ArrowForwardIosIcon /> </Button>
        </div>
        <br />
        <br />
        <MovieGrid />
    </div>
  );
}
{getTopMovies()}
ReactDOM.render(<App />, document.getElementById('root'));