import React, { useState, useEffect } from 'react';
import { getTopMovies } from '../api/MovieApi';
// import TextField from '@material-ui/core/TextField';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button, TextField } from '@material-ui/core';

export const MovieGrid = () => {
    const [movies, setMovies] = useState([]);

    console.log("movies", movies);
    useEffect(()=> {
        // console.log(getTopMovies());
        let movieData = [];
        getTopMovies().then(data => {
            data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date}));
            setMovies(movieData);
        })
        .catch(err => console.log(err));
        
    },[])

   return (
       <div>
            <h2><b>Movie App</b></h2>
            <div>
                <TextField id="outlined-basic" label="Search Movies" variant="outlined" />
                <Button onClick={()=>{console.log("Search movies")}} style={{"background-color":"purple", "margin-left": "10px", "height":"55px"}}> <ArrowForwardIosIcon /> </Button>
            </div>
            <br />
            <br />
            <div className="ag-theme-alpine" style={{height: 400, width: 900}}>
                <AgGridReact
                    rowData={movies}>
                    <AgGridColumn field="Movie"></AgGridColumn>
                    <AgGridColumn field="Overview"></AgGridColumn>
                    <AgGridColumn field="Release Date"></AgGridColumn>
                </AgGridReact>
            </div>
       </div>
   );
};
