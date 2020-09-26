import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let joke = null;
  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        joke = json.joke;
        console.log("joke", joke);
      });
  };

  return (
    <div>
      <button onClick={onTellJoke}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
