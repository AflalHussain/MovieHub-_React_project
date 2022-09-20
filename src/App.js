import { useState,useEffect } from "react";

import './App.css';

import MovieCard from "./MovieCard";

import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com/?apikey=768a1da8'

const App = () => {

    const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
    }
    const [movies,setmovies] = useState([]);
    const [searchterm,setSearchTerm] = useState([]);
    useEffect(() => {
        setSearchTerm('Batman')
        searchmovies('Batman');

    },[]);
    
    return (
        <div className="app">
            <h1>MovieHub</h1>
            
            <div className="search">
                <input
                placeholder="search for movies"
                value={searchterm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="Search"
                onClick={()=>searchmovies(searchterm)}
                />
            </div>
            {
                movies?.length>0
                ? (
                    
                    <div className="container">
                        {movies.map((movie)=>
                        <MovieCard movie={movie}/>
                        )
                        
                        }
                        
                    </div>
                    
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                    
                 )

            }            

                
            
        </div>
        
    );
}

export default App;