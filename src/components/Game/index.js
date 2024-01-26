import {Component} from 'react'

import Scoreboard from '../Scoreboard'

import Parts from '../Parts'

import Rules from '../Rules'

import Result from '../Result'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    Score: 0,
    computerChoice: choicesList[Math.floor(Math.random() * choicesList.length)],
    playerChoice: choicesList[0],
    showResult: false,
  }

  onParts = () => {
    this.setState({playerChoice: choicesList[0], showResult: true})
  }

  onParts1 = () => {
    this.setState({playerChoice: choicesList[1], showResult: true})
  }

  onParts2 = () => {
    this.setState({playerChoice: choicesList[2], showResult: true})
  }

  onIncreaseScore = () => {
    this.setState({Score: 1})
  }

  onDecreaseScore = () => {
    this.setState({Score: 1})
  }

  playAgain = () => {
    this.setState(prevState => ({
      showResult: !prevState.showResult,
      computerChoice:
        choicesList[Math.floor(Math.random() * choicesList.length)],
    }))
  }

  gameStart = () => (
    <>
      <div className="parts_background">
        <button
          type="button"
          className="btn"
          onClick={this.onParts}
          data-testid="rockButton"
        >
          <Parts key={choicesList[0].id} choicesListItems={choicesList[0]} /> {}
        </button>

        <button
          type="button"
          className="btn"
          onClick={this.onParts1}
          data-testid="scissorsButton"
        >
          <Parts key={choicesList[1].id} choicesListItems={choicesList[1]} />
          {}
        </button>
      </div>

      <div className="parts_background">
        <button
          type="button"
          className="btn"
          onClick={this.onParts2}
          data-testid="paperButton"
        >
          <Parts key={choicesList[2].id} choicesListItems={choicesList[2]} />
          {}
        </button>
      </div>
    </>
  )

  gameOver = () => {
    const {computerChoice, playerChoice} = this.state
    return (
      <Result
        computer={computerChoice}
        player={playerChoice}
        onDecreaseScore={this.onDecreaseScore}
        onIncreaseScore={this.onIncreaseScore}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {Score, showResult} = this.state
    return (
      <div className="game_background">
        <Scoreboard Score={Score} />

        {showResult ? this.gameOver() : this.gameStart()}

        <div className="rules_container">
          <Rules />
        </div>
      </div>
    )
  }
}

export default Game
