import { useState } from 'react'
import './App.css'
import backgroundImage from './images/bg.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [sunriseTime, setSunriseTime] = useState('')
  const [sunsetTime, setSunsetTime] = useState('')
  const [dayTime, setDayTime] = useState('')

  // Function to handle changes in the input fields
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
  };

  const handleSunriseChange = (event) => {
    setSunriseTime(event.target.value)
  };

  const handleSunsetChange = (event) => {
    setSunsetTime(event.target.value)
  };

  const handleCalculate = () => {
    const [sunriseHour, sunriseMinute] = sunriseTime.split(":").map(Number);
    const [sunsetHour, sunsetMinute] = sunsetTime.split(":").map(Number);
    const sunriseMinutes = sunriseHour * 60 + sunriseMinute;
    const sunsetMinutes = sunsetHour * 60 + sunsetMinute;

    const totalMinutesDaylight = sunsetMinutes - sunriseMinutes

    const prePlutoTime = (totalMinutesDaylight / 720)*24
    const plutoTime = sunriseHour + (prePlutoTime * 60)

    setDayTime(plutoTime);
  }

  return (
    <>
      <div className='container'>
        <div className='titletext'>
          <h1>Pluto Time.</h1>
          <p>Pluto Time Calculator, is a cool calculator which let's you experience <br>
          </br> the exact lightning conditions of Pluto on our planet!(Earth) by getting your precise location, date and time.<br>
          </br> and suggests you the precise timing to witness it.</p>
          <p>Let's Calculate!</p>


          <div className='input-container'>
            <label>Date:</label>
            <input
              type='date'
              value={selectedDate}
              onChange={handleDateChange}
              className='input-field'
            />
          </div>
          <div className='input-container'>
            <label>Sunrise Time:</label>
            <input
              type='time'
              value={sunriseTime}
              onChange={handleSunriseChange}
              className='input-field'
            />
          </div>
          <div className='input-container'>
            <label>Sunset Time:</label>
            <input
              type='time'
              value={sunsetTime}
              onChange={handleSunsetChange}
              className='input-field'
            />
          </div>

          <button onClick={handleCalculate}>Calculate</button>

          {dayTime && <p>Your Pluto Time: {dayTime} </p>}
        </div>
      </div>
      
    </>
  )
}

export default App
