import './index.css'

const Result = props => {
  const {computer, player, playAgain, onDecreaseScore, onIncreaseScore} = props

  const playerUrl = player.imageUrl
  const computerUrl = computer.imageUrl
  const computerId = computer.id
  const playerId = player.id

  let x = ''
  const result = () => {
    if (playerId === computerId) {
      x = 'IT IS DRAW'
    } else if (
      (computerId === 'ROCK' && playerId === 'SCISSORS') ||
      (computerId === 'PAPER' && playerId === 'ROCK') ||
      (computerId === 'SCISSORS' && playerId === 'PAPER')
    ) {
      x = 'YOU LOSE'
    } else {
      x = 'YOU WON'
    }
  }

  const onPress = () => {
    playAgain()
  }

  result()

  const getScore = () => {
    if (x === 'YOU WON') {
      onIncreaseScore()
    } else if (x === 'YOU LOSE') {
      onDecreaseScore()
    }
  }

  getScore()

  return (
    <div className="result_con">
      <div className="result_sub_con">
        <div className="individual_con">
          <h1 className="head">YOU</h1>
          <img src={playerUrl} className="image" alt="your choice" />
        </div>

        <div className="individual_con">
          <h1 className="head">OPPONENT</h1>
          <img src={computerUrl} className="image" alt="opponent choice" />
        </div>
      </div>

      <div className="result_con2">
        <p className="result">{x}</p>
        <button type="button" className="play_again" onClick={onPress}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default Result
