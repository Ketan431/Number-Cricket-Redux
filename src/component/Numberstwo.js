import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { passPlayer, playertwo, wickettwo } from "./actions";

import Number from "./Number";
import { connect } from "react-redux";

export class Numberstwo extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.passVal !== prevProps.passVal) {
      this.setState({ checkPass: false });
    }
    if (this.props.passVal === 12) {
      this.play.current.disabled=true;
    }
  }
  constructor(props) {
    super(props);
    this.state = { count: 0, score: [], run: 0, checkPass: true };
    this.renderNumbers = this.renderNumbers.bind(this);
    this.play = React.createRef();
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  endGame() {
    if (this.state.count === 6) {
      this.props.pass(this.state.count);
    }
    
  }

  myClick = () => {
    let num = [1, 2, 4, 6, 3, 0];
    let run = num[this.randomNumber(0, 6)];
    this.props.playertwo(run);
    this.state.score.push(run);

    let wic = 0;
    if (run === 0) {
      wic += 1;
    }
    this.props.wickettwo(wic);
    this.setState({
      run: num[this.randomNumber(0, 6)],
      count: this.state.count + 1,
    });
    if (this.state.count === 6) {
      this.props.pass(this.state.count);
    }
  };

  renderNumbers() {
    return (
      <div className="ground">
        {this.state.score.map((option, i) => (
          <div className="run" key={i}>
            <Number key={i} option={option} />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          onClick={this.myClick.bind(this)}
          disabled={
            this.state.checkPass &&
            (this.props.tossVal === "T" && this.state.count < 6 ? false : true)
          }
          ref={this.play}
        >
          Play
        </button>
        &nbsp;
        <button
          className="btn btn-success"
          onClick={this.endGame.bind(this)}
          disabled={this.state.count < 6 ? true : false}
        >
          Pass
        </button>
        {this.renderNumbers()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playertwo: (data) => dispatch(playertwo(data)),
    wickettwo: (data) => dispatch(wickettwo(data)),
    pass: (data) => dispatch(passPlayer(data)),
  
  };
};
const mapStateToProps = (state) => {
  const { toss } = state;
  const { passPlayer } = state;

  return {
    tossVal: toss,
    passVal: passPlayer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Numberstwo);
