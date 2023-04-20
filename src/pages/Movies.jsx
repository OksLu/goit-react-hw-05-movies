import { fetchMovie } from 'components/API/FetchMovie';
import { Search } from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    if (searchParams) {
      fetchMovie(searchParams).then(response => setMovies(response));
    }
  }, [searchParams]);
  return (
    <div>
      <Search value={movieName} onChange={updateQueryString} />
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Movies;
