import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { getTopMovies, searchMovies } from '../api/MovieApi';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid } from './Grid';


/*
Container Component For Grid data
Uses Grid as presentation component
*/

// const Child = forwardRef((props, ref) => {

//     // The component instance will be extended
//     // with whatever you return from the callback passed
//     // as the second argument
//     useImperativeHandle(ref, () => ({
  
//       getAlert() {
//         alert("getAlert from Child");
//       }
  
//     }));

export const MovieGrid = forwardRef((props, ref) => {
        const [movies, setMovies] = useState([]);

    function getTopMoviesApi(){
        let movieData = [];
        getTopMovies().then(data => {
            data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
            setMovies(movieData);
        })
        .catch(err => console.log(err));
    }

    function searchMoviesApi(searchQuery){
        let movieData = [];
        searchMovies(searchQuery).then(data => {
            data.results.forEach((x, i) => movieData.push({"Movie": x.title, "Overview": x.overview, "Release Date": x.release_date, "Language": x.original_language}));
            setMovies(movieData);
        }).catch(err => console.log(err));
        console.log(movieData);
    }



    useEffect(()=> {
        // console.log(getTopMovies());
        getTopMoviesApi();
        
    },[]);

    useImperativeHandle(ref, () => ({

        searchMoviesHook(searchQuery) {
            console.log("Search Movies");
            searchMoviesApi(searchQuery);
        },
        searchTopMovies() {
            console.log("Search Top Movies");
            getTopMoviesApi();
          }
    
      }));

    //   useImperativeHandle(ref, () => ({

    //     searchTopMovies() {
    //         console.log();
    //     }
    
    //   }));

    // keep state of top movies, or searched movies
   return (
       <div>
            <p></p> 
            <Grid rowData={movies} fields={["Movie", "Overview", "Release Date", "Language"]}/>
       </div>
   );
});
