import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
import { useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import propTypes from 'prop-types';
import poster from '../../images/poster.jpg';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <div>
      <div className={css.container}>
        <Link to={backLink.current}>
          <FaArrowLeft />
        </Link>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : poster
          }
          alt={movie.original_title}
          width="300"
          height="450"
        />
        <div>
          <h2>{movie.original_title || movie.title}</h2>
          <h3>({movie.release_date})</h3>
          <h3>User Score: {movie.vote_average}</h3>
          <p className={css.review}>{movie.overview}</p>
          <div className={css.wrapper}>
            <h3>Genres:</h3>
            {movie.genres.map(genre => {
              return (
                <p key={genre.id} className={css.genres}>
                  {genre.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={css.additional}>
        <ul>
          <h3>Additional info:</h3>
          <li>
            <Link to="cast" className={css.more}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.more}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

MovieCard.prototype = {
  movie: propTypes.shape({
    poster_path: propTypes.string.isRequired,
    original_title: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    release_date: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
