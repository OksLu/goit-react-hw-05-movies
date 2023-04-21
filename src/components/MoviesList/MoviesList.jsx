import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
import propTypes from 'prop-types';
import poster from '../../images/movie-clip-art-28.png';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies &&
        movies.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                      : poster
                  }
                  alt={item.title || item.name}
                  width="300"
                  height="450"
                />
                <h2 className={css.title}>{item.title || item.name}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

MoviesList.prototype = {
  movies: propTypes.shape({
    id: propTypes.number.isRequired,
    poster_path: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
  }).isRequired,
};

export default MoviesList;
