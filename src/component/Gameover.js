import { Button, Modal } from "react-bootstrap";
import React,{useEffect, useState} from 'react'

import {useSelector} from 'react-redux'

function Gameover(props) {
    const[win,setWin] = useState('');
    const[draw,setDraw] = useState(false);
    const handleClose = () => setShow(false);
    const player1 = useSelector(state => state.playerone);
    const player2 = useSelector(state => state.playertwo);
    const endGame = useSelector(state => state.passPlayer);
    const [show, setShow] = useState(false);

   

    const gameover = () => {
        if(player1>player2){
            setWin('Player one wins')
            console.log(win);
        }
        else if(player2>player1){
            setWin('Player two wins')
            console.log(win);
        }
        else if(player1===player2){
            setDraw(true);
            console.log(draw);
        }
        else{

            console.log(endGame);
        }
    }

    return (
      <div>
      
        {/*<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Toss</Modal.Title>
          </Modal.Header>
          <Modal.Body>{gameover}</Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>*/}
      </div>
    );
}



export default Gameover

