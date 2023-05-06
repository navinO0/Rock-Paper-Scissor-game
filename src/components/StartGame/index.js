import GameContext from '../../context/GameContext'

import './index.css'

const GameStart = () => (
  <GameContext.Consumer>
    {value => {
      const {
        userOption,
        choicesList,
        generateSystemOptions,
        showResultToggle,
      } = value

      const onClickOption = id => {
        userOption(id)
        generateSystemOptions()

        showResultToggle()
      }

      return (
        <div className="start-game-container">
          <ul className="game-button-ul-container">
            {choicesList.map(eachOne => {
              const onOpt = () => {
                onClickOption(eachOne.id)
              }
              return (
                <button
                  key={eachOne.id}
                  type="button"
                  className="rpc-buttons"
                  data-testid={`${eachOne.id.toLowerCase()}Button`}
                  onClick={onOpt}
                >
                  <img
                    src={eachOne.imageUrl}
                    alt={eachOne.id}
                    className="rpc-img"
                  />
                </button>
              )
            })}
          </ul>
        </div>
      )
    }}
  </GameContext.Consumer>
)

export default GameStart
