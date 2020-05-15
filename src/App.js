import React, {useState, useEffect} from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BASE_URL, API_KEY} from './constants'
import Description from './components/Description'
import Header, {formattedDate, selectDate} from './components/Header'
import styled from 'styled-components'
import Image from './components/Image'
import img from './imgs/hero2.jpg'
import "./App.css";


const StyledApp = styled.div`
background-image: url(${img});

.title{
  margin: 0;
  padding: 3%;
}
`

function App() {

  const [data, setData] = useState({})
  const {date, explanation, url, title, copyright} = data

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
    <StyledApp className="App">
      <h1 className='title'>NASA's A Picture a Day!</h1>
      <Header date = {date} selectDate = {selectDate} setSelectDate={setSelectDate} dateSetter={dateSetter} formattedDate={formattedDate} title = {title}/>
      <Description explanation = {explanation} title = {title} copyright={copyright}/>
      <Image image = {url} title = {title}/>
    </StyledApp>
  );
}

export default App;
