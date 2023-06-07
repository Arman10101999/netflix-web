import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";
import instance from "./axios";
import axios from "axios";

const Banner = () => {
  //fetch the movies from the database and store it in the state and use it from here
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(instance.fetchTrending);
      setMoive(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);
  //  this functon is for large sentences it cuts it and put ... at the end
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmbd.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button"> Play </button>
          <button className="banner__button"> My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      {/* for little cool background color */}
      <div className="banner__fadeButton" />
    </header>
  );
};

export default Banner;
