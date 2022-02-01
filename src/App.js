import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Spinner from "./Spinner";

function App() {
  let city = "New York";
  function handleResponse(response) {
    alert(`The temperature in ${city} is ${response.data.main.temp} °C`);
  }

  let apiKey = "7cc4ba5a8fa8fdc11de61ff161ff458d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Spinner />
      </header>
    </div>
  );
}

export default App;
