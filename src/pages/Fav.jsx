import { useSelector } from "react-redux";
import MovieCard from "./../components/MovieCard";
function Favourite() {
  const checkMovies = useSelector((state) => state.Favorite.favMovies);

  return (
    <>
      {checkMovies.length > 0 ? (
        <div className="d-flex justify-content-around flex-wrap m-4">
          {checkMovies.map((movie) => {
            return <MovieCard key={movie.id} className="col-3" movie={movie} />;
          })}
        </div>
      ) : (
        <h1 style={{ height: "80vh" }} className="container my-2">
          Your Favorite List is Empty!
        </h1>
      )}
    </>
  );
}

export default Favourite;
