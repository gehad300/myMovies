import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddFavorite,
  RemoveFavorite,
} from "./../store/Actions/FavourateAction";
// import { useState } from "react";

function MovieCard({ movie }) {
  // const [favButton, setFavButton] = useState(true);
  const favMovies = useSelector((state) => state.Favorite.favMovies);
  const dispatch = useDispatch();

  const addFav = (movie) => {
    dispatch(AddFavorite(movie));
    // setFavButton(false);
  };

  const remFav = (movieId) => {
    dispatch(RemoveFavorite(movieId));
  };

  return (
    <>
      <div className=" card text-white bg-dark mb-3" style={{ width: "19rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top h-75"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          {favMovies.map((ob) => ob.id).indexOf(movie.id) > -1 ? (
            <i
              onClick={() => remFav(movie.id)}
              className="fa fa-heart remheart"
              aria-hidden="true"
            />
          ) : (
            <i
              onClick={() => addFav(movie)}
              className="fa fa-heart addheart"
              aria-hidden="true"
            />
          )}

          <p>Date: {movie.release_date}</p>
          <Link to={`movies/${movie.id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
