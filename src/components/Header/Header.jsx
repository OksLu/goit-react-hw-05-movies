import css from './Header.module.css';
const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.navItem}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navItem}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
