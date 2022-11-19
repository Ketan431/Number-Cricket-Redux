import {combineReducers} from 'redux'
import pass from './passPlayer';
import playeroneReducer from './player1';
import playertwoReducer from './player2';
import tossReducer from './toss'
import wicketReducer from './wickets';
import wickettwoReducer from './wicket2';


const rootReducer = combineReducers({
	wickets: wicketReducer,
	toss : tossReducer,
	wickettwo: wickettwoReducer,
	playerone: playeroneReducer,
	playertwo: playertwoReducer,
	passPlayer:pass,
	
});

export default rootReducer;