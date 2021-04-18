import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Weather city ="Tokyo"/>
      </header>
      <Search />
    </div>
  );
}

export default App;
