import "./style.css";

function Movies(props) {
  let movies = props.movies || [];
  return (
    <div className="movies">
      {movies.map((movie, i) => (
        <Movie
          key={100 + i}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
      {movies.length === 0 ? null : (
        <div style={{ paddingBottom: "400px", width: "1px" }}></div>
      )}
    </div>
  );
}

function Movie(props) {
  return <div className="movie">{props.title}</div>;
}

export default Movies;
