import "./style.css";
import { BsAward, BsAwardFill } from "react-icons/bs";
import { useState } from "react";

function Movies(props) {
  //const [nominations, setNominations] = useState(props.nominations);
  const movies = props.movies || [];

  return (
    <div className="movies">
      {movies.map((movie, i) => (
        <Movie
          key={100 + i}
          movie={movie}
          onClick={props.onNominate}
          nominated={props.nominations.includes(movie.imdbID)}
        />
      ))}
      {movies.length === 0 ? null : (
        <div style={{ paddingBottom: "400px", width: "1px" }}></div>
      )}
    </div>
  );
}

function Movie(props) {
  const [hover, setHover] = useState(false);
  const [nominated, setNominated] = useState(props.nominated);

  const handleHover = (hov) => {
    setHover(hov);
  };

  const handleClick = () => {
    setNominated(props.onClick(props.movie));
  };

  return (
    <div className="movie" onClick={handleClick}>
      {props.movie.Poster === "N/A" ? (
        <div className="no-img"></div>
      ) : (
        <img src={props.movie.Poster} alt={props.movie.Title} />
      )}
      <span className="title">{props.movie.Title}</span>
      <br />
      <div className="year-nom">
        <span>{props.movie.Year}</span>
        <div className="award-svg">
          {nominated ? (
            <BsAwardFill className="fill" />
          ) : (
            <BsAward className="no-fill" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
