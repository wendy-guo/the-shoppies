import "./style.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="heading">
        <div className="text">NOMINATE YOUR FAVOURITE MOVIES</div>
        <div className="background"></div>
      </div>
      <div className="search">
        <input className="bar" type="text" placeholder="search..." />
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default SearchBar;
