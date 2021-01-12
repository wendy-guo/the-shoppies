import "./style.css";
import { BsAward, BsAwardFill } from "react-icons/bs";

function Movies(props) {
  let movies = props.movies || [];
  return (
    <div className="movies">
      {movies.map((movie, i) => (
        <Movie key={100 + i} movie={movie} onClick={props.onNominate} />
      ))}
      {movies.length === 0 ? null : (
        <div style={{ paddingBottom: "400px", width: "1px" }}></div>
      )}
    </div>
  );
}

function Movie(props) {
  return (
    <div className="movie" onClick={() => props.onClick(props.movie)}>
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
          <BsAward />
        </div>
      </div>
    </div>
  );
}

export default Movies;
