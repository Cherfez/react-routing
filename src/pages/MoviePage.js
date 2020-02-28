import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const [movieData, setMovieData] = useState([]);
  const location = useParams();

  const search = async () => {
    const specific_movie = `http://www.omdbapi.com/?i=${location.id}&apikey=58aeba17`;
    const response = await axios.get(specific_movie);
    console.log("response", response.data);

    setMovieData(response.data);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <h2>More info on this movie:</h2>
      <h3>{movieData.Title}</h3>
      <img src={movieData.Poster} />
    </div>
  );
}
