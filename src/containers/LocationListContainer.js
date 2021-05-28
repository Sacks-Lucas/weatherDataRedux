import React from 'react'
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import { setSelectedCity,setWeather } from './../actions';
import * as actions from './../actions';
import { Component } from 'react';
import {getCity, getWeatherCities} from '../reducers'

class LocationListContainer extends Component {
    
    componentDidMount(){
        const {setWeather,setSelectedCity,cities,city} = this.props
        setWeather(cities)
        setSelectedCity(city)
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city)
    }
    render(){
        return (
            <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    // setCity:PropTypes.func.isRequired,
    setSelectedCity:PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
    city:PropTypes.string.isRequired,
}

const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

const mapDispatchToProps= dispatch => bindActionCreators(actions, dispatch)
/*
const mapDispatchToProps= dispatch =>({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})
*/
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
