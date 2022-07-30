import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8080");
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return <div className="App"></div>;
}

export default App;
