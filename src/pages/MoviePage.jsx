import { fetchMovieById } from 'components/API/FetchMovieById';
import Loader from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(response => setMovie(response));
  }, [id]);

  return (
    <main>
      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviePage;
