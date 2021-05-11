import React, { useState, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { MovieGrid } from './components/MovieGrid';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Input } from 'semantic-ui-react';


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

  function keyPress (e) {
    if (e.key === 'Enter') {
      searchMovies();
    }
  }

  return (
    <div style={{"marginLeft":"30px", "marginTop":"20px"}}>
      <h2 style={{"marginLeft":"-8px"}}><b>Movie App</b></h2>
        <div style={{"display":"flex", "marginTop":"25px"}}>
          <Input onKeyDown={keyPress} placeholder='Search...' action={{ color: "teal", content: "Search", onClick: searchMovies}} variant="outlined" onChange={(e)=>{setSearchQuery(e.target.value)}}/>
          {/* <button 
            class="ui button"
            onClick={searchMovies}
            style={{"backgroundColor":"purple", color:"white", "marginLeft": "10px", "height":"55px", width:"55px", textAlign:"center"}}
            >
              <Icon size="big" name="angle right icon" style={{marginLeft:"-8.5px"}}/>
            </button> */}
          <button class="ui primary button" style={{"backgroundColor":"cyan", "color":"Grey", "marginLeft": "50px", "height":"55px"}} 
            onClick={searchTopMovies}>
            Get Top Movies
          </button>
        </div>
        <br />
        <MovieGrid ref={movieGridRef} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));