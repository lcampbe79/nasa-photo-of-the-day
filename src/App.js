import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";


import "./App.css";

function App() {
  const [data, setData] = useState({});
  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=0KOwHwj2ahRDZ7JGNigjeHi9a9z0gdJJT4Vk4DmO")
  //   .then(response => {
  //     console.log(response)

  //   })
  //   .catch(error => console.log('There is an error: ', error))

  // }, [])
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card />
    </div>
  );
}

export default App;
