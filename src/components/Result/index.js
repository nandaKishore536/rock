import './index.css'

const Result = props => {
  const {computer, player, playAgain} = props

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
    return x
  }

  const onPress = () => {
    playAgain()
  }

  const y = result()

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
        <p className="result">{y}</p>
        <button type="button" className="play_again" onClick={onPress}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default Result
