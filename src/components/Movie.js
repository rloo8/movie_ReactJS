import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, language }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img className={styles.movie__img} src={coverImg} alt={title} />
      </Link>

      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span className={styles.movie__lang}>{language}</span>
        <p className={styles.movie__summary}>
          {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
