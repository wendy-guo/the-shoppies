import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleNomClick = () => {
    setShowSideBar(true);
  };

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setPage(1);
    console.log("hallo ---------------", page);
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
  };

  return (
    <div className="App">
      <TopBar onNomClick={handleNomClick} />
      <SearchBar onValueChange={handleValueChange} />
      <SideBar
        numNom={0}
        nominations={[1, 2, 3, 4, 5]}
        open={showSideBar}
        onClose={handleCloseSidebar}
      />
    </div>
  );
}

export default App;
