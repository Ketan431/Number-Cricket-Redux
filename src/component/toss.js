import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import {toss} from './actions';
import {useDispatch} from 'react-redux';

export function Toss() {
  const [show, setShow] = useState(false);
  const [coin, updateCoin] = useState("");
  const handleClose = () => setShow(false);
  const [clicked,setClick] = useState(false);
  const dispatch = useDispatch();
  const handleShow = () => {
    var x = Math.floor(Math.random() * 2) === 0;

    if (x) {
      updateCoin("Heads, Player one bats first");
      dispatch(toss('H'));
    } else {
      updateCoin("Tails, Player two bats first");
      dispatch(toss('T'));
      
     
    }
    setShow(true);
     
    setClick(true)
    if(clicked){
      setShow(false);
    }
  };


  return (
    <div>
      <Button className="btn btn-success toss" onClick={handleShow} disabled={show}>
        TOSS
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Toss</Modal.Title>
        </Modal.Header>
        <Modal.Body>{coin}</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
/*const mapDispatchToProps = (dispatch) => {
  return {
    toss: (data) => dispatch(toss(data)),
  };
};*/
export default  Toss;//connect(null, mapDispatchToProps)(Toss);