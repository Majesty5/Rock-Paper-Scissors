import React, {Component} from 'react';
import PlayerCard from './PlayerCard'

class Game extends Component {
  constructor () {
    super ();
this.signs = ["rock", "scissors", "paper"];
this.state = {
  playerOne: "rock",
  playerTwo: "scissors",
}
  }


  render (){
    return (
      <div className= "container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner"> The Champiyon! </div>
        <button type="button"> Get This Work </button>
      </div>
    )
  }
}

export default Game;
