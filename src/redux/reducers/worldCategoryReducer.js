import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';


export default function worldCategoryReducer (state=initialState,action){
    switch (action.type) {
        case actionTypes.TRAVEL_TOUR:
            
        return action.payload
    
        default:
           return state;
    }
}