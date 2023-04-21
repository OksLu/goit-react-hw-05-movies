import { fetchCast } from 'components/API/FetchCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import profile from '../../images/Default_pfp.svg.png';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    fetchCast(id).then(response => setCast(response));
  }, [id]);

  return (
    <ul className={css.list}>
      {cast &&
        cast.map(({ id, profile_path, name }) => {
          return (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : profile
                }
                alt={name}
                width="300"
              />

              <h2>{name}</h2>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
