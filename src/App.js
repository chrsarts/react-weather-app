import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}`;

  const getWeatherData = async (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setCity("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={city}
          onKeyPress={getWeatherData}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      Temp:{data && data.main.temp}°C
    </div>
  );
}

export default App;
