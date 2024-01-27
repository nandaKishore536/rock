import './index.css'

const Scoreboard = props => {
  const {Score} = props

  return (
    <div className="scoreboard_background">
      <h1 className="list_item">
        Rock <br /> Paper
        <br /> Scissors
      </h1>

      <div className="sub_scoreboard">
        <p className="score_title">Score</p>
        <p className="s">{Score}</p>
      </div>
    </div>
  )
}

export default Scoreboard
