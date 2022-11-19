import "bootstrap/dist/css/bootstrap.min.css";

import Numberstwo from "../Numberstwo";
import React from "react";
import {useSelector} from 'react-redux';

function Player2() {
  const score = useSelector(state => state.playertwo)
  const wickets = useSelector(state => state.wickettwo)
  
  return (
    
    <div className="col-md-5">
      <ul>
        <h2 className="header-title">Player2</h2>
        <p>Score:{score}/{wickets}</p>
      </ul>
      <div>
        <Numberstwo className="player2" />
      </div>
    </div>
  );
}

export default Player2;
