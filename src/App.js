import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        < Weather city ="Tokyo"/>
      </div>
      <Search />
    </div>
  );
}

export default App;
