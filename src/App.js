import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <weather />
        <footer>
          This project was coded by Maryann Nzekwe and it is{" "}
          <a
            href="https://github.com/MaryannNIM/react-weather-app"
            target="_blank"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
