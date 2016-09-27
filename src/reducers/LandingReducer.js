const landingReducer = (state={}, action)=>{
	switch(action.type){
		case 'ON_LANDING':
			return Object.assign({}, state, action.payload)
    case 'OFF_LANDING':
      return Object.assign({}, state, action.payload)
		default:
			return state
	}

}

export default userReducer
