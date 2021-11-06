import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import API_key from "../Requests/API";
import instance from "../Requests/axios";
// Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
// Params
import { useParams } from "react-router";
// Progress
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function DetailsPage() {
  const [Movie, setMovie] = useState(null);
  let { movie } = useParams();
  useEffect(() => {
    instance
      .get(`/movie/${movie}?api_key=${API_key}&language=en-US`)
      .then((Result) => {
        setMovie(Result);
      });
  }, []);
  console.log(Movie);

  return (
    <div className="DetailsPage">
      <div className="Description">
        <p className="Description_subs">SUBSCRIBER</p>
        <br />
        <h3>{Movie?.data.original_title}</h3>
        <br />
        <div className="timestamps">
          <p>
            <strong>Release :</strong> {Movie?.data.release_date}
          </p>
          <p>
            <strong>Rating :</strong> {Movie?.data.vote_average}
          </p>
        </div>
        <br />
        <p>{Movie?.data.overview}</p>
        <br />
        <div className="Description_controllers">
          <p className="controllers">
            <PlayArrowIcon className="icons" /> <strong>Watch Movie </strong>
          </p>
          <div className="socialMedia">
            <p className="controllers">
              <AddIcon className="icons" /> <strong>Watchlist</strong>
            </p>
            <p className="controllers">
              <ShareIcon className="icons" /> <strong>Share</strong>
            </p>
          </div>
        </div>
      </div>
      {Movie ? (
        <img
          src={`https://images.tmdb.org/t/p/original/${Movie?.data.backdrop_path}`}
          alt=""
          className="DetailImage"
        />
      ) : (
        <Box className="loading">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default DetailsPage;
