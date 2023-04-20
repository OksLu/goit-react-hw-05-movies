import { fetchMovieById } from 'components/API/FetchMovieById';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(response => setMovie(response));
  }, [id]);

  return <main>{movie && <MovieCard movie={movie} />}</main>;
};

export default MoviePage;
