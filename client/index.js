import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { MovieGrid } from './components/MovieGrid';
import 'semantic-ui-css/semantic.min.css';
import { Input, Grid } from 'semantic-ui-react';
import { getTopMoviesApi, searchMoviesApi } from '/api/MovieApi';


// check for existing cards

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopMovies();
  }, []);

  function getTopMovies(){
    let movieData = [];
    getTopMoviesApi().then(data => {
        data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
        setMovies(movieData);
    })
    .catch(err => console.log(err));
  }

  function searchMovies(){
    let movieData = [];
    searchMoviesApi(searchQuery).then(data => {
        data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
        setMovies(movieData);
    }).catch(err => console.log(err));
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
          <button class="ui primary button" style={{"backgroundColor":"cyan", "color":"Grey", "marginLeft": "50px", "height":"55px"}} 
            onClick={getTopMovies}>
            Get Top Movies
          </button>
        </div>
        <br />
        <br />
        {/* <MovieGrid ref={movieGridRef} /> */}
        <Grid style={{width:"1200px"}}>
          <Grid.Row>{["Movie", "Overview", "Release Date", "Language"].map(field => <Grid.Column width={4}><b>{field}</b></Grid.Column>)}</Grid.Row>
        </Grid>
        <MovieGrid rowData={movies} fields={["Movie", "Overview", "Release Date", "Language"]}/>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));