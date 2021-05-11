import React, { useState, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { MovieGrid } from './components/MovieGrid';
import { Button, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// check for existing cards

function App() {
  const movieGridRef = createRef();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
  }, [movieGridRef]);


  function searchTopMovies() {
    movieGridRef.current.searchTopMovies();
  }

  function searchMovies() {
    movieGridRef.current.searchMoviesHook(searchQuery);
  }

  return (
    <div>
      <h2><b>Movie App</b></h2>
        <div>
          <TextField id="outlined-basic" label="Search Movies" variant="outlined" onChange={(e)=>{setSearchQuery(e.target.value)}}/>
          <Button onClick={searchMovies}
                  style={{"backgroundColor":"purple", "margin-left": "10px", "height":"55px"}}> 
            <ArrowForwardIosIcon /> 
          </Button>
          <Button  onClick={searchTopMovies} style={{"backgroundColor":"cyan", "margin-left": "50px", "height":"55px"}}> Get Top Movies </Button>
        </div>
        <br />
        <br />
        <MovieGrid ref={movieGridRef} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));