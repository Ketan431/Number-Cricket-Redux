
export const toss = (val) =>{
	return {
		type:'TOSS',
        payload:val
	};
};


export const wicketone = (wic) =>{
	return {
		type:'WICKETONE',
        payload:wic
	};
};

export const wickettwo = (wic) =>{
	return {
		type:'WICKETTWO',
        payload:wic
	};
};



export const playerone = (data) =>{
	return{
		type:'PLAYERONE',
		payload:data
	}
}

export const playertwo = (data) =>{
	return{
		type:'PLAYERTWO',
		payload:data
	}
}

export const passPlayer = (data) =>{
	return{
		type:'PASS',
		payload:data
	}
}


