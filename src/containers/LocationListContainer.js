import React from 'react'
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList';
import {connect} from 'react-redux'
import { setSelectedCity,setWeather } from './../actions';
import { Component } from 'react';
import {getWeatherCities} from '../reducers'

class LocationListContainer extends Component {
    
    componentDidMount(){
        this.props.setWeather(this.props.cities)
    }

    handleSelectedLocation = city => {
        this.props.setCity(city)
    }
    render(){
        return (
            <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
}

const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state)
})

const mapDispatchToProps= dispatch =>({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
