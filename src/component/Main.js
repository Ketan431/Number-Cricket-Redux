import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import Gameover from './Gameover'
import Player1 from "./players/Player1";
import Player2 from "./players/Player2";
import React from "react";
import Toss from "./toss";
import {useSelector} from 'react-redux';
import { useState } from "react";

function Main() {
  const [num, updateNum] = useState(0);
  function count(number) {
    updateNum(number);
    console.log(num);
  }
  const toss = useSelector(state => state.toss)

  
  return (
    <div>
      <header className="jumbotron">
        <h2 className="header-title">Number Cricket</h2>
      </header>

      <div>
        <Toss data={count} />
      </div>

      <div className="container-fluid">
        <div className="row">
          <Player1 toss={toss} />
          <div className="col-md-1">
            <div className="line"></div>
          </div>
          <Player2 toss={toss} />
        </div>
        <div className="row">
          <Gameover />
        </div>
      </div>
    </div>
  );
}

export default Main;
