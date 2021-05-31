import Phaser from 'phaser'
import { INITIALIZE_GAME_SCENE } from '../sceneNames'
import handlers from './handlers'

class InitializeGame extends Phaser.Scene {
  constructor () {
    super(INITIALIZE_GAME_SCENE)
  }

  preload () {
    handlers.preload(this)
  }

  create () {
    handlers.create(this)
  }

  update () {
    handlers.update(this)
  }
}

export default InitializeGame
