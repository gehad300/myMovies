import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./styles/style.css";

// import { Suspense } from "react";
import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Notfound from "./pages/NotFound";
import Contact from "./pages/contact";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/movieDetails";
import Favourite from "./pages/Fav";
import Login from "./pages/login";
import Register from "./pages/register";
// import Loader from "./components/Loader";

// const Contact = React.lazy(() => import("./pages/contact"));
// const Movies = React.lazy(() => import("./pages/Movies"));
// const MovieDetails = React.lazy(() => import("./pages/movieDetails"));
// const Favourite = React.lazy(() => import("./pages/Fav"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Suspense fallback={<Loader />}> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" exact component={MovieDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/favourite" component={Favourite} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={Notfound} />
        </Switch>
        {/* </Suspense> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
