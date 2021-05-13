import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@babel/polyfill'
import { MovieGrid } from './components/MovieGrid';
import 'semantic-ui-css/semantic.min.css';
import { Input, Grid, Button } from 'semantic-ui-react';
import { getTopMoviesApi, searchMoviesApi } from '/api/MovieApi';


// check for existing cards

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieSort, setMovieSort] = useState("");

  useEffect(() => {
    localStorage.clear();
    getTopMovies();
  }, []);

  function getTopMovies(){
    let movieData = [];
    console.log("getting top movies");
    let cachedMovies = localStorage.getItem('topMovies');
    if (cachedMovies){
        setMovies(JSON.parse(cachedMovies));
    } else {
      getTopMoviesApi().then(data => {
          // console.log(data);
          console.log("getting top movies");
          data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
          // console.log("top movies", movieData);
          setMovies(movieData);
          localStorage.setItem('topMovies', JSON.stringify(movieData));
      })
      .catch(err => console.log(err));
  }
    // console.log("top movies", data);
  }

  function searchMovies(){
    let movieData = [];
    let cachedMovies = localStorage.getItem(searchQuery);
    if (cachedMovies){
        setMovies(JSON.parse(cachedMovies));
    } else {
    searchMoviesApi(searchQuery).then(data => {
        data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
        setMovies(movieData);
        localStorage.setItem(searchQuery, JSON.stringify(movieData));
    }).catch(err => console.log(err));
    } 
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
          <Grid.Row>{["Movie", "Overview", "Release Date", "Language"].map
              (field => 
                  <Grid.Column key={field+"_col"} width={4}>
                    <div key={field+"_div"}>
                      <b>{field}</b>
                      {field != "Overview" ?
                      <Button key={field+"_button"} onClick={()=>{setMovieSort(field)}}
                              style={{marginLeft:"20px", backgroundColor:"white"}} 
                              // lol doing this to avoid css misery
                              icon='angle up'></Button> :<Button icon='angle up' style={{marginLeft:"20px", color: "white", backgroundColor:"white"}}  />
                      }
                    </div></Grid.Column>)}
            </Grid.Row>
        </Grid>
        <MovieGrid rowData={movies} sort={movieSort} fields={["Movie", "Overview", "Release Date", "Language"]}/>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));