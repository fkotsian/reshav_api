import React, { useState, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { MovieGrid } from './components/MovieGrid';
import { TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'


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
    <div style={{"marginLeft":"20px", "marginTop":"10px"}}>
      <h2><b>Movie App</b></h2>
        <div style={{"display":"flex"}}>
          <TextField id="outlined-basic" label="Search Movies" variant="outlined" onChange={(e)=>{setSearchQuery(e.target.value)}}/>
          <Button
            class="ui primary button"
            icon='angle right icon'
            onClick={searchMovies}
            style={{"backgroundColor":"purple", color:"white", "margin-left": "10px", "height":"55px", width:"55px"}}
          />
          <button class="ui primary button" style={{"backgroundColor":"cyan", "color":"Grey", "margin-left": "50px", "height":"55px"}} 
            onClick={searchTopMovies}>
            Get Top Movies
          </button>
        </div>
        <br />
        <br />
        <MovieGrid ref={movieGridRef} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));