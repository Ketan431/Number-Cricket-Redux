const pass = (state=0,action)=>{
	switch(action.type){
		case 'PASS' : return state + action.payload;
		default: return state;
        
	}
}

export default pass;