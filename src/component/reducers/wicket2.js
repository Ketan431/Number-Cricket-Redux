const wickettwoReducer = (state=0,action)=>{
	switch(action.type){
		case 'WICKETTWO' : return state + action.payload;
		default: return state;
	}
}

export default wickettwoReducer;