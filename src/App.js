import React from "react";
import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="container">  
    <div className="App">
      <header className="App-header">
        < Weather city ="Tokyo"/>
      </header>
    </div>
    </div>
  );
}

export default App;
