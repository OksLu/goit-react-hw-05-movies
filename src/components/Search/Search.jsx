import css from './Search.module.css';
import propTypes from 'prop-types';

export const Search = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className={css.input}
      />
    </div>
  );
};

Search.prototype = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
