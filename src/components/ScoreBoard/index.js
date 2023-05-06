import GameContext from '../../context/GameContext'

import './index.css'

const ScoreBoard = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value
      return (
        <div className="score-card-container">
          <div className="game-text-container">
            <h1 className="game-text">Rock Paper Scissors</h1>
          </div>
          <div className="score-card-text-container">
            <p className="score-text">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default ScoreBoard
