const playeroneReducer = (state=0,action)=>{
	switch(action.type){
		case 'PLAYERONE' : return state+action.payload;
		default: return state;
        
	}
}

export default playeroneReducer;