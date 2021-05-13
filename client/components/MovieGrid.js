import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { getTopMovies, searchMovies } from '../api/MovieApi';
import { SemanticGrid } from './SemanticGrid';


/*
Container Component For Grid data
Uses Grid as presentation component
*/


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

   return (
       <div>
            <p></p> 
            {/* <Grid rowData={movies} fields={["Movie", "Overview", "Release Date", "Language"]}/> */}
            <SemanticGrid rowData={movies} fields={["Movie", "Overview", "Release Date", "Language"]}/>
       </div>
   );
});
