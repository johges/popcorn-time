import { useState } from "react";

import movies from "./data/movies.json";

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImage] = useState("");
  

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter( (element) => {
        return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL
    }

    const newList = [newMovie, ...moviesToDisplay];
    
    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
    setRating("");
    setImage("");
  }

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="enter the title" 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }} 
              required
            />
          </label>
          <label>
            Rating
            <input 
              type= "number"
              name="rating" 
              placeholder="enter the rating" 
              value={rating} 
              min={1}
              max={10}
              onChange={(e) => { setRating(e.target.value) }} 
              required
            />
          </label>
            Image
            <input 
              type= "text"
              accept= "image"
              name="image" 
              placeholder="enter the image URL" 
              value={imgURL} 
              onChange={(e) => { setImage(e.target.value) }} 
            />
        <button>Create</button>
        </form>
      </section>

      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
