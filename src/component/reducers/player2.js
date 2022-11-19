const playertwoReducer = (state=0,action)=>{
	switch(action.type){
		case 'PLAYERTWO' : return state+action.payload;
		default: return state;
        
	}
}

export default playertwoReducer;