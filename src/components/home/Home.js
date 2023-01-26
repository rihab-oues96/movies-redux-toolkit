import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import "./Home.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

import { useDispatch } from "react-redux";

//  import APIKey from "../../common/apis/movieApiKey";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movie='harry'
    const serie='friends'
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(serie));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
