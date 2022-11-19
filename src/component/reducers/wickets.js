const wicketReducer = (state=0,action)=>{
	switch(action.type){
		case 'WICKETONE' : return state + action.payload;
		default: return state;
	}
}

export default wicketReducer;