import { Routes, Route } from "react-router-dom";

import './App.css'
import Navigation from "./components/Navigation/Navigation";

import HomePage from "view/HomePage";
import Cast from "view/Cast";
import MoviesPage from "view/MoviesPage";
import MovieDetailsPage from "view/MovieDetailsPage";
import Reviews from "view/Reviews";

export default function App (){
  return (
  <>
  <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage/>}>
        <Route path=":movieId" element={<MovieDetailsPage/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Route>
  </Routes> 
  </>
  );
};
