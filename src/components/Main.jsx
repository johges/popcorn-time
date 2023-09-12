import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main(){

    // const [variable, setVariable] = useState(initalValue);

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        console.log("deleting on movie with id....", movieId);

        const newList = moviesToDisplay.filter( (element) => {
            if(element.id !== movieId){
                return true;
            } else {
                return false;
            }
            
        });

        setMoviesToDisplay(newList);

    }


    return (
        <div className="Main">
            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <section key={movieObj.id} className="card">
                        <img src={movieObj.imgURL} alt={movieObj.title} />
                        <h2>{movieObj.title}</h2>
                        <h3>Year: {movieObj.year}</h3>
                        <h4>Rating:{movieObj.rating}</h4>

                        <button onClick={() => {deleteMovie(movieObj.id)}}>Delete</button>
                    </section>
                )
            })}
        </div>
    );
}


export default Main;
