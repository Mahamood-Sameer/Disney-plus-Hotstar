import React, { useEffect, useState } from "react";
import "./Rows.css";
import instance from "../Requests/axios";
import { Link } from "react-router-dom";

function Rows({ title, fetchURL }) {
  const [Movies, setMovies] = useState(null);
  useEffect(() => {
    instance.get(fetchURL).then((data) => {
      setMovies(data.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="movie__rows">
      <h3>{title}</h3>
      <div className="movie__row__container">
        {console.log(Movies)}
        {Movies?.map((Movie) =>
          Movie.adult ? (
            <></>
          ) : (
            <Link to={`/${Movie.id}`}>
              <img
                src={`https://images.tmdb.org/t/p/original/${Movie.poster_path}`}
                alt="poster"
                className="movie__poster"
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Rows;
