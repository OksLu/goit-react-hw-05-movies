import { fetchReview } from 'components/API/FetchReview';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchReview(id).then(response => {
      if (response.length !== 0) {
        setReviews(response);
      }
    });
  }, [id]);

  return (
    <div>
      {reviews ? (
        reviews.map(({ id, author, content }) => {
          return (
            <div key={id} className={css.review}>
              <h2>{author}</h2>
              <p className={css.text}>{content}</p>
            </div>
          );
        })
      ) : (
        <h2 className={css.failure}>No reviews!</h2>
      )}
    </div>
  );
};

export default Review;
