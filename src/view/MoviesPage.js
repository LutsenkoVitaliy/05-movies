import { useState, useEffect } from 'react'

import SearchForm from 'components/SearchForm';
import { fetchMoviesByName } from 'services/theMoviedbAPI';


export default function MoviesPage() {
  const [nameFilm, setNameFilm] = useState('');
  const [listFilm, setListFilm] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSearchSubmit = nameFilm => {
    setNameFilm(nameFilm)
    console.log(nameFilm);
  }


  if (status === 'idle') {
    return <SearchForm onSearchSubmit={handleSearchSubmit}/>
  }
  if (status === 'pending') {
    return (
      <>
      <SearchForm onSearchSubmit={handleSearchSubmit}/>
        <h2>Wait....</h2>
      </>
    )
  }
  
  if (status === 'rejected') {
    return (
      <SearchForm onSearchSubmit={handleSearchSubmit}/>
    ) 
  }
  if (status === 'resolved') {
    return (
      <SearchForm onSearchSubmit={handleSearchSubmit}/>
    ) 
  }
}

MoviesPage.propTypes = {}


