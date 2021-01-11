import "./App.css";
import { useState } from "react";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleNomClick = () => {
    setShowSideBar(true);
  };

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="App">
      <TopBar onNomClick={handleNomClick} />
      <SearchBar />
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
