import React, { useState, useEffect } from 'react';
import CityList from './components/CityList';
import Button from './components/Button';
import { APIS } from './constants/endpoints';
import { HomeContainer } from './style';
import './style/index.css';

function App(props) {

  const [weatherDetails, setWeatherDetails] = useState();
  const [location, setLocation] = useState('');

  const getWeattherInfo = () => {

    fetch(`${APIS._WEATHER_INFO}?location=${location}`)
    .then(response => {
      return response.json()
    })
    .then(res => {
      setWeatherDetails(res)
    })
  }

  const getCity = (val) =>{
    setLocation(val.value)
  }

  useEffect(() => {
    getWeattherInfo();
  }, [])

  return (
    <HomeContainer>
      <div className="mainContainer">
          <h2>City Weather Report</h2>
          <div className="innerContainer">
            <CityList getCity={getCity}/>
            <Button buttonText="Submit" onClick={getWeattherInfo}/>
          </div>
      </div>
    </HomeContainer>
  );
}

export default App;
