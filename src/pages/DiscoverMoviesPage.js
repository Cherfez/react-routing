import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  //for searching, input field
  const [searchText, set_searchText] = useState("");
  //status of search
  const [searchStatus, setSearchStatus] = useState("");
  //status to display movies
  const [displayMovie, setDisplayMovie] = useState([]);
  const params = useParams();

  const search = async () => {
    //console.log("Im searching for:", searchText);
    setSearchStatus("Searching");

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(params.searchtext);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=58aeba17&s=${queryParam}`
    );

    setSearchStatus("Done");
    console.log("resonse", response.data.Search);
    //console.log("Success!", response);
    const responseSearch = response.data.Search;
    //console.log("respnsesrch", responseSearch);

    setDisplayMovie(responseSearch);
    //console.log(setDisplayMovie);
  };
  const history = useHistory();

  const navigateToSearch = event => {
    event.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    search();
  }, [params]);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <form onSubmit={navigateToSearch}>
          <input
            value={searchText}
            onChange={event => set_searchText(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </p>
      <p>{searchStatus}</p>
      <div>
        {displayMovie.map(film => {
          return (
            <div>
              <Link to={`/movie/${film.imdbID}`}>
                <h3>{film.Title}</h3>
                <img src={film.Poster} alt="something" />
                <p>
                  Year: {film.Year} imdb-ID: {film.imdbID}
                </p>
              </Link>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}
