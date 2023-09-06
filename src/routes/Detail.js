import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.movie__container}>
          {[details].map((detail) => (
            <div key={detail.id}>
              <img
                src={detail.large_cover_image}
                className={styles.movie__img}
              ></img>
              <h1>
                {detail.title} ({detail.year})
              </h1>
              <ul className={styles.movie__genres}>
                {detail.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
              <p>{detail.description_full}</p>
            </div>
          ))}
          <button>
            <Link to={"/"}>Back</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
