import React, {Component} from 'react';
import PlayerCard from './PlayerCard'

class Game extends Component {
  constructor () {
    super ();
this.signs = ["rock", "paper", "scissors"];
this.state = {
  playerOne: "rock",
  playerTwo: "scissors",
}
  }

//Home of the Methods
  playGame = () => {
    this.setState({
      playerOne: this.signs [Math.floor(Math.random()*3)],
      playerTwo: this.signs [Math.floor(Math.random()*3)],
    })
  }

// *********** My attempt to create code. Gibberish, but the logic works.
//   decideWinner = () => {
//     function playerOneW(props) {
//     return <h1>Woot Woot Player 1</h1>;
//   }
//
//   function playerTwoW(props) {
//     return <h1>Aw Snap Player 2</h1>;
//   }
//
//   function tiedGame(props) {
//     return <h1>Let's Have a Do-Over</h1>;
//   }
//   function winnyWin(props) {
//     if (playerOne > playerTwo);
//      {
//       return <playerOneW />;
//     }
//     if (playerTwo > playerOne);
//     return <playerTwoW />;
//   }
//     }
//     if (playerTwo == playerOne);
//     return <tiedGame />;
//   }
//
//     })
//   }
//********************* See the correct code below

decideWinner = ()=> {
  const playerOne = this.state.playerOne
  const playerTwo = this.state.playerTwoW

  if (playerOne === playerTwo) {
    return "It's A Tie!"
  } else if ((playerOne === "rock" && playerTwo === "scissors")||
            (playerOne === "paper" && playerTwo === "rock")||
            (playerOne === "scissors" && playerTwo === "paper")){

    return "Player One Wins!"

  }
    else {
      return "Player Two Wins!"
    }
}

  render (){
    return (
      <div className= "container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.decideWinner ()}</div>
        <button type="button" onClick={this.playGame}> Get This Work </button>
      </div>
    )
  }
}

export default Game;
