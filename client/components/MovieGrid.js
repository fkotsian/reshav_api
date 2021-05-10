import React, { useState, useEffect } from 'react';
import { getTopMovies } from '../api/MovieApi';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from './Grid';


/*
Container Component For Grid data
Uses Grid as presentation component
*/

export const MovieGrid = () => {
    const [movies, setMovies] = useState([]);

    console.log("movies", movies);
    useEffect(()=> {
        // console.log(getTopMovies());
        let movieData = [];
        getTopMovies().then(data => {
            data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
            setMovies(movieData);
        })
        .catch(err => console.log(err));
        
    },[])

   return (
       <div>
            <Grid rowData={movies} fields={["Movie", "Overview", "Release Date", "Language"]}/>
       </div>
   );
};
