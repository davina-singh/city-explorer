import './App.css';
import { useState } from 'react';
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() { 

  async function getLocation(event) {
    event.preventDefault();
  }
  // the API url used to make a request 
  const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
  // make the GET request 
  const res = await axios.get(API);
;
  return (
    <>
    </>
  )
}

export default App;
