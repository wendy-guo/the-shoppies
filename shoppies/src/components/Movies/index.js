import "./style.css";

function Movies(props) {
  let movies = props.movies || [];
  return (
    <div>
      {movies.map((movie, i) => (
        <Movie
          key={100 + i}
          id={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}

function Movie(props) {
  return <div className="movie">{props.title}</div>;
}

export default Movies;
