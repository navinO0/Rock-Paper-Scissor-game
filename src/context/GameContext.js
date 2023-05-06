import React from 'react'

const GameContext = React.createContext({
  score: 0,
  choicesList: [],
  youClicked: {},
  compSelected: {},
  showResult: false,
  gameResult: '',
  showResultToggle: () => {},
  caluculateScore: () => {},
  userOption: () => {},
  generateSystemOptions: () => {},
  playAgainBtn: () => {},
})

export default GameContext
