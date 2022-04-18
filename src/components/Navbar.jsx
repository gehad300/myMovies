import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChangeLangAction } from "./../store/Actions/LangAction";

function Navbar() {
  const counter = useSelector((state) => state.Favorite.counter);
  const Lang = useSelector((state) => state.currentLang.lang);
  const dispatch = useDispatch();

  const handleChangeLang = () => {
    dispatch(ChangeLangAction(Lang === "en" ? "ar" : "en"));
  };

  return (
    <>
      <ul
        style={{ height: "60px" }}
        className="nav bg-dark d-flex align-items-center"
      >
        <li className="nav-item nav-li">
          <i className="fa fa-video-camera" aria-hidden="true"></i>
        </li>
        <li className="nav-item nav-li">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item nav-li">
          <Link className="nav-link text-light" to="/movies">
            Movies
          </Link>
        </li>
        <li className="nav-item nav-li">
          <Link className="nav-link text-light" to="/favourite">
            Favourite
            <span className="badge bg-primary mx-1">{counter}</span>
          </Link>
        </li>

        <li className="nav-item nav-li">
          <Link className="nav-link text-light" to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item nav-li">Lang: {Lang}</li>
        <button
          className="btn btn-dark"
          onClick={() => {
            handleChangeLang();
          }}
        >
          Change Lang
        </button>

        <button style={{ marginLeft: "365px" }} className="btn btn-dark">
          <Link className="nav-link text-light" to="/login">
            Login
          </Link>
        </button>
        <button className="btn btn-dark">
          <Link className="nav-link text-light" to="/register">
            Register
          </Link>
        </button>
      </ul>
    </>
  );
}

export default Navbar;
