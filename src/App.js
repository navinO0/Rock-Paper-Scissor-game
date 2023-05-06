import {Component} from 'react'

import GameHome from './components/GameHome/index'

import GameContext from './context/GameContext'

import './App.css'

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
class App extends Component {
  state = {
    score: 0,

    youClicked: '',
    compSelected: '',
    showResult: false,
    gameResult: '',
  }

  userOption = id => {
    this.setState({youClicked: id})
  }

  generateSystemOptions = () => {
    const randNum = Math.floor(Math.random() * 3)
    this.setState({compSelected: choicesList[randNum].id}, this.caluculateScore)
  }

  caluculateScore = () => {
    const {youClicked, compSelected} = this.state
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
      result = 'DROW'
    }
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: result,
      }))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: result,
      }))
    }
  }

  showResultToggle = () => {
    this.setState({showResult: true})
  }

  playAgainBtn = () => {
    this.setState({showResult: false})
  }

  render() {
    const {score, youClicked, compSelected, showResult, gameResult} = this.state

    return (
      <GameContext.Provider
        value={{
          score,
          choicesList,
          youClicked,
          compSelected,
          showResult,
          gameResult,

          userOption: this.userOption,
          generateSystemOptions: this.generateSystemOptions,
          caluculateScore: this.caluculateScore,
          showResultToggle: this.showResultToggle,
          playAgainBtn: this.playAgainBtn,
        }}
      >
        <GameHome />
      </GameContext.Provider>
    )
  }
}

export default App
