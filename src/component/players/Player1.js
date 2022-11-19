import "bootstrap/dist/css/bootstrap.min.css";

import Numbers from "../Numbers";
import React from "react";
import {useSelector} from 'react-redux';

function Player1(props) {
  const score = useSelector(state => state.playerone)
  const wickets = useSelector(state => state.wickets)

  return (
    <div className="col-md-5">
      <ul>
        <h2 className="header-title">Player1</h2>
        <p>Score:{score}/{wickets}</p>
      </ul>
      <div>
        <Numbers className="player1" />
      </div>
    </div>
    
  );
}

export default Player1;
