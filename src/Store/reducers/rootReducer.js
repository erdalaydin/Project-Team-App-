import autReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
    aut: autReducer,
    project: projectReducer
    
})


export default rootReducer