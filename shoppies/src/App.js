import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Movies from "./components/Movies";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [fixedSearchBar, setFixedSearchBar] = useState(false);

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
      `http://www.omdbapi.com/?s=${search}&type=movie&page=${page}&apikey=83cf2cc8`
    );
    setMovies(() => {
      movies.push(...(results.data.Search || []));
      return page === 1 ? results.data.Search || [] : movies;
    });
    setPage(page + 1);
    console.log(movies);
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
    console.log("another page....................");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getResults(value);
  }, [value]);

  useEffect(() => {
    if (!isFetching) return;
    console.log("get results", page);
    getResults(value);
    setIsFetching(false);
  }, [isFetching]);

  return (
    <div className="App">
      <div className="app-bg"></div>
      <TopBar onNomClick={handleNomClick} />
      <SearchBar onValueChange={handleValueChange} fixed={fixedSearchBar} />
      <SideBar
        numNom={0}
        nominations={[1, 2, 3, 4, 5]}
        open={showSideBar}
        onClose={handleCloseSidebar}
      />
      <Movies movies={movies} margin={fixedSearchBar} />
    </div>
  );
}

export default App;
