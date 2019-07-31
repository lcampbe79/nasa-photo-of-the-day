import React from "react";

export default function Card(props) {
  if(!props.img) return <h3>Loading.....</h3>
  
  return (
    <div>
      <h1>{props.copyright}</h1>
      <h3>{props.title}</h3>
      <h3>{props.date}</h3>
      <img src={props.img}></img>
      <p>{props.explanation}</p>
    </div>
  )

}

//this comp