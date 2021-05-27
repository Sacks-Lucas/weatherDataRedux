import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {city} from '../reducers/city'

const initalState = {
    city:"Buenos Aires,ar"
}

const composeEnhacers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= createStore(city,initalState,composeEnhacers(applyMiddleware(thunk)))
