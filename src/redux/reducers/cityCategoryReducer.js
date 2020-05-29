import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';


export default function cityCategoryReducer (state=initialState,action){
    switch (action.type) {
        case actionTypes.CITY_TOUR:
            
        return action.payload
    
        default:
           return state;
    }
}