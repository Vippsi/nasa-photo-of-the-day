import React, {useState, useEffect} from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BASE_URL, API_KEY} from './constants'
import Description from './components/Description'
import Header, {formattedDate, selectDate} from './components/Header'
import Image from './components/Image'
import "./App.css";

function App() {

  const [data, setData] = useState({})
  const {date, explanation, url, title} = data


  const [selectDate, setSelectDate] = useState(new Date())
  const formattedDate = `${selectDate.getFullYear()}-${selectDate.getMonth()+ 1}-${selectDate.getDate()}` 

  const dateSetter = (selectDate) => {
    setSelectDate(selectDate)
   }

  useEffect(()=> {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${formattedDate}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log('Not today sir.')
    })

  },[formattedDate])



  return (
    <div className="App">
      
      <Header date = {date} selectDate = {selectDate} setSelectDate={setSelectDate} dateSetter={dateSetter} formattedDate={formattedDate} title = {title}/>

      <Description explanation = {explanation}/>
      <Image image = {url}/>

    </div>
  );
}

export default App;
