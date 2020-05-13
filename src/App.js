import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants'
import Description from './components/Description'
import Header from './components/Header'
import Image from './components/Image'
import "./App.css";

function App() {

  const [data, setData] = useState({})
  const {date, explanation, url} = data

  useEffect(()=> {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log('Not today sir.')
    })

  },[])
  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header date = {date}/>
      <Description explanation = {explanation}/>
      <Image image = {url}/>

    </div>
  );
}

export default App;
