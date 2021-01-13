import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import DarkLayer from "./components/DarkLayer";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Submit from "./components/Submit";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [nominations, setNominations] = useState(
    JSON.parse(localStorage.getItem("nominations")) || []
  );
  const [banner, setBanner] = useState(false);
  const [fixedSearchBar, setFixedSearchBar] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNomClick = () => {
    setShowSideBar(true);
  };

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setMovies([]);
    setPage(1);
  };

  const getResults = async (search) => {
    const results = await axios.get(
      `https://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=83cf2cc8`
    );
    setMovies(() => {
      movies.push(...(results.data.Search || []));
      return page === 1 ? results.data.Search || [] : movies;
    });
    setPage(page + 1);
  };

  const handleScroll = () => {
    setFixedSearchBar(document.documentElement.scrollTop !== 0);
    if (
      Math.ceil(
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop
      ) !== document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  const handleNomination = (movie) => {
    if (nominations.filter((mov) => mov.imdbID === movie.imdbID).length > 0) {
      let new_nom = nominations.filter((mov) => mov.imdbID !== movie.imdbID);
      setNominations(new_nom);
      localStorage.setItem("nominations", JSON.stringify(new_nom));
      setBanner(false);
      return false;
    } else if (nominations.length === 5) {
      return false;
    } else {
      setBanner(nominations.length === 4);
      nominations.push(movie);
      setNominations(nominations);
      localStorage.setItem("nominations", JSON.stringify(nominations));
      return true;
    }
  };

  const handleBannerClose = () => {
    setBanner(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setNominations([]);
    handleBannerClose();
  };

  const handleCloseSubmit = () => {
    setSubmitted(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getResults(value);
  }, [value]);

  useEffect(() => {
    if (!isFetching) return;
    getResults(value);
    setIsFetching(false);
  }, [isFetching]);

  return (
    <div className="App">
      <div className="app-bg"></div>
      <TopBar onNomClick={handleNomClick} />
      <SearchBar onValueChange={handleValueChange} fixed={fixedSearchBar} />
      <DarkLayer show={showSideBar} onClick={handleCloseSidebar} />
      <SideBar
        nominations={nominations}
        open={showSideBar}
        onClose={handleCloseSidebar}
        onUnnominate={handleNomination}
        onSubmit={handleSubmit}
      />
      <Banner
        show={banner}
        onClose={handleBannerClose}
        onSubmit={handleSubmit}
      />
      <Movies
        movies={movies}
        margin={fixedSearchBar}
        onNominate={handleNomination}
        nominations={nominations.map((movie) => movie.imdbID)}
      />
      <Submit show={submitted} onCloseSubmit={handleCloseSubmit} />
    </div>
  );
}

export default App;
