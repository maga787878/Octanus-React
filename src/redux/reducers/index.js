import {combineReducers} from 'redux'
import cityCategoryReducer from './cityCategoryReducer'
import worldCategoryReducer from './worldCategoryReducer'


const rootReducer =combineReducers({
    cityCategoryReducer,
    worldCategoryReducer
})

export default rootReducer