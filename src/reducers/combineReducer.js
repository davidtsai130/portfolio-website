import { combineReducers } from 'redux'
import landingReducer from './LandingReducer'

const Reducers = combineReducers({
  landing: landingReducer
	})

export default Reducers
