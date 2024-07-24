import { useState } from "react";
import styles from "./Weather.module.css";

const api = {
  key: import.meta.env.VITE_OPENWEATHER_API_KEY,
  base: import.meta.env.VITE_OPENWEATHER_BASE_URI,
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    location: "...",
    temperature: "...˚C",
    conditions: "...",
  });

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather({
          location: result.name + ", " + result.sys.country,
          temperature: result.main.temp + "˚C",
          conditions: result.weather[0].main,
        });
      });
  };

  return (
    <>
      <div className={styles.weather_app}>
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city/town name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => searchPressed()}>Search</button>
        </div>

        <p>{weather.location}</p>

        <p>{weather.temperature}</p>

        <p>{weather.conditions}</p>
      </div>
    </>
  );
}
