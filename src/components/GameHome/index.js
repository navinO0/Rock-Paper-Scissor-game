import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameContext from '../../context/GameContext'

import 'reactjs-popup/dist/index.css'

import StartGame from '../StartGame'

import GameResult from '../GameResult'

import ScoreBoard from '../ScoreBoard'

import './index.css'

const GameHome = () => (
  <GameContext.Consumer>
    {value => {
      const {showResult} = value

      return (
        <div className="game-home-main-container">
          <div className="game-card-content-container">
            <ScoreBoard />

            {showResult ? <GameResult /> : <StartGame />}
          </div>
          <div className="button-container">
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="trigger-button">
                    RULES
                  </button>
                }
              >
                {close => (
                  <div className="popped-container">
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine className="close-btn" />
                    </button>
                    <div className="rules-image-contaier">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                        className="rules-image"
                      />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default GameHome
