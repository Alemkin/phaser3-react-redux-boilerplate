import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/components/App'
import Phaser from 'phaser'
import { Provider } from 'react-redux'
import gameOptions from './constants/gameOptions'

import store from './store'

import '../favicon.ico'

import registerServiceWorker from './registerServiceWorker'

const game = new Phaser.Game(gameOptions)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('ui-app')
)

registerServiceWorker()
