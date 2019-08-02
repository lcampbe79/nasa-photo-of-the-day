import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";


import "./App.css";

function App() {

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=0KOwHwj2ahRDZ7JGNigjeHi9a9z0gdJJT4Vk4DmO")
      .then(response => {
        console.log(response)
        setData(response.data)
      })
    .catch(error => console.log('There is an error: ', error))

  }, [])

  // console.log(data)
  
  return (
    <div className="App">
      <Card 
        copyright={data.copyright}
        title={data.title}
        date={data.date}
        img={data.url}
        explanation={data.explanation}
      /> 
    </div>
  );
}

export default App;
