import { fetchTrending } from 'components/API/FetchTrending';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';
const { useEffect, useState } = require('react');

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadTrends = async () => {
      try {
        const results = await fetchTrending();
        setTrends(results);
      } catch (error) {
        console.log(error);
      }
    };
    loadTrends();
  }, []);
  return <MoviesList movies={trends} location={location} />;
};

export default Home;
