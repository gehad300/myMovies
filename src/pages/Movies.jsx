import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Search from "../components/search";
// import { getMovies } from "../network/moviesApi";
// import { searchMovies } from "../network/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMoviesAction,
  getMoviesBySearch,
} from "./../store/Actions/GetMovies";

function Movies() {
  // const [myMovies, setMyMovies] = useState([]);
  const [myPage, setMyPage] = useState(1);
  const [SearchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.allMovies.list);
  const Lang = useSelector((state) => state.currentLang.lang);

  let DefautPagination;

  if (SearchKey === "") {
    DefautPagination = true;
  } else {
    DefautPagination = false;
  }

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButton = () => {
    dispatch(getMoviesBySearch(SearchKey, myPage, Lang));

    // searchMovies(SearchKey, myPage)
    //   .then((res) => {
    //     setMyMovies(res.data.results);
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    DefautPagination
      ? // getMovies(myPage)
        //     .then((res) => {
        //       setMyMovies(res.data.results);
        //     })
        //     .catch((err) => console.log(err))
        dispatch(getAllMoviesAction(myPage, Lang))
      : // searchMovies(SearchKey, myPage)
        //     .then((res) => {
        //       setMyMovies(res.data.results);
        //     })
        //     .catch((err) => console.log(err));
        dispatch(getMoviesBySearch(SearchKey, myPage, Lang));
  }, [DefautPagination, SearchKey, dispatch, myPage, Lang]);

  return (
    <>
      <Search
        SearchKey={SearchKey}
        handleChange={handleChange}
        searchButton={searchButton}
      />
      <div className="d-flex flex-wrap m-4">
        {allMovies.map((movie) => {
          return (
            <div key={movie.id} className="col-3 d-flex justify-content-center">
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center container my-2">
        <button
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              myPage > 1 ? setMyPage(myPage - 1) : setMyPage(1);
            }
          }}
          className="btn btn-dark mx-1"
        >
          Previous
        </button>
        <button
          onClick={() => {
            setMyPage(myPage + 1);
          }}
          className="btn btn-dark mx-1"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Movies;
