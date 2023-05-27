import Counter from "./components/Counter";
import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div>
        {" "}
        <p>Loading...</p>
        <button
          onClick={() => {
            // setTimeout(() => {
            //   setLoading(false);
            // }, 3000);
            setLoading(false);
          }}
        >
          Ready!
        </button>
      </div>
    );
  }

  let darkModeTitle = "";
  if (theme === "dark") {
    darkModeTitle = <h2>You are in Dark mode!</h2>;
  }

  const counter = 0;

  const url = window.location.pathname;

  return (
    <div className={"App " + theme}>
      {/* State and events */}
      {url === "/data" && (
        <div>
          {" "}
          <h1>React - state and events</h1>
          <Counter />
          {counter && <h2>The counter!</h2>}
          {/* {theme === "dark" && <h2>You are using Dark mode!</h2>} */}
          {/* {darkModeTitle} */}
          {theme === "dark" ? <h2>You are using Dark mode!</h2> : null}
          <select
            onChange={event => {
              console.log(event);
              setTheme(event.target.value);
            }}
          >
            <option value="light"> Light </option>
            <option value="dark"> Dark </option>
          </select>
          <button onClick={() => setUnit("C")}> °C </button>
          <button onClick={() => setUnit("F")}> °F </button>
          <div>
            <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
            <WeatherWidget
              city="Mexico City"
              icon="⛈️"
              celsius={17}
              unit={unit}
            />
            <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
            <WeatherWidget
              city="Barcelona"
              icon="🌤️"
              celsius={28}
              unit={unit}
            />
          </div>
        </div>
      )}

      {/* Lists and keys */}
      {url === "/movies" && (
        <div>
          <h2>Movies list</h2>
          <MoviesList />
        </div>
      )}

      {/* Conditional rendering. if-else, logical operator and ternary  */}
    </div>
  );
}

export default App;
