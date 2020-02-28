import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Tabletop from 'tabletop';
import {cityList} from '../actions/';
import connect from 'react-redux';

const CityList = (props) => {

    const [city, setCity] = useState();
    const [selectedCity, setSelectedCity] = useState();

  const getCity = () => {
    Tabletop.init({
      key: '1CV-Msh8kTYNg0D1wUyYC8LnwX1RJ_wBGxItQ_1JVkwc',
      callback: cityData => {
        // response.data.data.map((v) => ({id: v.id, label: v.cityName, value: v.cityName})
        setCity(cityData.map((v) => ({
                id: v.id,
                label: v.city_name,
                value: v.city_name
            }))
        )
      },
      simpleSheet: true
    })
  }

  const handleCitySelected = (val) => {
    props.getCity(val)
  }

  useEffect(() => {
    getCity();
  }, [])
    
 return(
    <div className="selectContainer">
        <Select
            className='selectionBox'
            placeholder="Select City" 
            options={city} 
            onChange={(evt) => handleCitySelected(evt)}
        />
    </div>
    );
}

// const mapDispatchToProps = () => {
//     return null;
// }

// const mapStateToProps = (state) => {
// const { selectedCity } = state 
//     return selectedCity;
// }

export default CityList;