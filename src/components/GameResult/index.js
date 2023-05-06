import GameContext from '../../context/GameContext'

import './index.css'

const GameResult = () => (
  <GameContext.Consumer>
    {value => {
      const {choicesList, youClicked, compSelected, playAgainBtn} = value

      const onClickPlayAgain = () => {
        playAgainBtn()
      }

      let result = ''
      if (youClicked === 'ROCK' && compSelected === 'SCISSORS') {
        result = 'YOU WON'
      } else if (youClicked === 'SCISSORS' && compSelected === 'ROCK') {
        result = 'YOU LOSE'
      } else if (youClicked === 'SCISSORS' && compSelected === 'PAPER') {
        result = 'YOU WON'
      } else if (youClicked === 'PAPER' && compSelected === 'SCISSORS') {
        result = 'YOU LOSE'
      } else if (youClicked === 'PAPER' && compSelected === 'ROCK') {
        result = 'YOU WON'
      } else if (youClicked === 'ROCK' && compSelected === 'PAPER') {
        result = 'YOU LOSE'
      } else if (youClicked === compSelected) {
        result = 'IT IS DRAW'
      }

      const computerSelected = choicesList.filter(
        eachOne => compSelected === eachOne.id,
      )
      const userSelected = choicesList.filter(
        eachOne => eachOne.id === youClicked,
      )

      return (
        <div className="game-result-main-container">
          <div className="selected-options-container">
            <div className="you-container">
              <h1 className="player-text">YOU</h1>
              {userSelected.map(each => (
                <img
                  src={each.imageUrl}
                  alt="your choice"
                  className="RPC-images"
                />
              ))}
            </div>
            <div className="you-container">
              <h1 className="player-text">OPPONENT</h1>
              {computerSelected.map(each => (
                <img
                  src={each.imageUrl}
                  alt="opponent choice"
                  className="RPC-images"
                />
              ))}
            </div>
          </div>
          <div className="result-text-play-again-container">
            <p className="result-text">{result}</p>
            <button
              type="button"
              onClick={onClickPlayAgain}
              className="play-again-btn"
            >
              Play Again
            </button>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default GameResult
