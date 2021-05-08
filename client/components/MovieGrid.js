import React, { useState, useEffect } from 'react';
import { getTopMovies } from '../api/MovieApi';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const MovieGrid = () => {
    const [movies, setMovies] = useState([{"Movie": "x.title", "Overview": "x.overview", "Release Date": "x.release_date"}]);

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

   
    const rowData = [
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxter", price: 72000}
   ];

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 900}}>
           <AgGridReact
               rowData={movies}>
               <AgGridColumn field="Movie"></AgGridColumn>
               <AgGridColumn field="Overview"></AgGridColumn>
               <AgGridColumn field="Release Date"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};
