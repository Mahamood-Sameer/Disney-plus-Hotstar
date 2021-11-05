import React, { useEffect, useState } from "react";
import "./Rows.css";
import instance from "../Requests/axios";

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
        {Movies?.map((Movie) => (
            Movie.adult ?<></>:
          <img
            src={`https://images.tmdb.org/t/p/original/${Movie.poster_path}`}
            alt="poster"
            className="movie__poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
