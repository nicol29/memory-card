function ScoreTracker (props) {

  return (
    <div className="score">
      <div>
        Score: {props.currentScore}
      </div>
      <div>
        High Score: {props.highScore}
      </div>
    </div>
  )
}

export default ScoreTracker