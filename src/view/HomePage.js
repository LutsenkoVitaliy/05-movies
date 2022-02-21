import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../services/theMoviedbAPI';
import ListMoviesTrending from 'components/ListMoviesTrending';

export default function HomePage() {
  const [trendFilm, setTrendFilm] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchListTrendMovies() {
      try {
        setStatus('pending');
        const Movies = await fetchTrendingMovies();
        setTrendFilm(Movies);
        setStatus('resolved')
      } catch (error) {
        setStatus('rejected')
        setError(error)
      }
    }
    fetchListTrendMovies()
  }, []);
  
   if (status === 'idle') {
    return <></>
  }
   if (status === 'pending') {
    return <h2>Wait.....</h2>
  }

  if (status === 'rejected') {
     return <h2>{error.message}</h2>
  }

   if (status === 'resolved') {
     return <ListMoviesTrending films={trendFilm}/>
  }
   
  
}



HomePage.propTypes = {}



