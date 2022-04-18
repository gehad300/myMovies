import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
// import { AxisInstance } from "./../network/axiosconfig";
import { getMoviesId } from "../network/moviesApi";

function MovieDetails() {
  const params = useParams();
  const [Details, setDetails] = useState({});
  const Lang = useSelector((state) => state.currentLang.lang);

  useEffect(() => {
    getMoviesId(params.id, Lang)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id, Lang]);

  return (
    <>
      <div className="container my-4 d-flex justify-content-center">
        <div className="card w-50 h-50">
          <img
            src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`}
            className="card-img-top"
            alt={Details.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{Details.original_title}</h5>
            <p>Date: {Details.release_date}</p>
            <p className="card-text">{Details.overview}</p>
            <p className="card-text">Vote Average: {Details.vote_average}/10</p>
            <p className="card-text">No of Voters: {Details.vote_count}</p>

            <Link to="/movies" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
