import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const initalState = {
    city:"Buenos Aires,ar"
}

const composeEnhacers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= createStore(reducers,initalState,composeEnhacers(applyMiddleware(thunk)))
