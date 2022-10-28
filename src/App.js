import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("cebu");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`;

  useEffect(() => {
    getWeatherData();
  }, []);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      getWeatherData();
    }
  };

  const getWeatherData = async () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
    setCity("");
  };

  return (
    <div className="App">
      <img src={require("./images/kimsan.png")} alt="MISSING" />
      <div className="title">
        <h3>mag</h3>
        <h1>weather weather</h1>
        <h3>app</h3>
      </div>
      <div className="content">
        <div className="top">
          <input
            type="text"
            placeholder="enter city"
            value={city}
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="main-container">
          {data ? (
            <div className="main-container">
              <Weather data={data} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
