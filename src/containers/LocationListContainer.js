import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import { setSelectedCity,setWeather } from './../actions';
import * as actions from './../actions';
// import { Component } from 'react';
import {getCity, getWeatherCities} from '../reducers'


const LocationListContainer = props => {
    useEffect(() => {
        const {setWeather,setCity,cities,city} = props
        setWeather(cities)
        setCity(city)
        // eslint-disable-next-line 
    }, [])
    const handleSelectedLocation = city => {
        this.props.setSelectedCity(city)
        this.props.setCity(city)
    }
    return (
            <LocationList cities={props.citiesWeather} 
            onSelectedLocation={handleSelectedLocation} ></LocationList>
    )
}

// class LocationListContainer extends Component {
//     componentDidMount(){
//         const {setWeather,/*setSelectedCity*/setCity,cities,city} = this.props
//         console.log("props:", this.props)
//         setWeather(cities)
//         // setSelectedCity(city)
//         setCity(city)
//     }
    
//     handleSelectedLocation = city => {
//         // this.props.setSelectedCity(city)
//         this.props.setCity(city)
//     }
//     render(){
//         return (
//             <LocationList cities={this.props.citiesWeather} 
//             onSelectedLocation={this.handleSelectedLocation} ></LocationList>
//         )
//     }
// }


LocationListContainer.propTypes = {
    // setSelectedCity:PropTypes.func.isRequired,
    setCity:PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
    city:PropTypes.string.isRequired,
}

const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

const mapDispatchToProps= dispatch => bindActionCreators({setCity:actions.setSelectedCity,setWeather: actions.setWeather}, dispatch)
/*
const mapDispatchToProps= dispatch =>({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
})
*/
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
