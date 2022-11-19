const tossReducer = (state=0,action)=>{
	switch(action.type){
		case 'TOSS' : return action.payload;
		default: return state;
	}
}

export default tossReducer;