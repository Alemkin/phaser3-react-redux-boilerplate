import Phaser from 'phaser'
import { INITIALIZE_GAME_SCENE } from '../sceneNames'
import preloadHandler from './preload'
import createHandler from './create'
import updateHandler from './update'

class InitializeGame extends Phaser.Scene {
  constructor () {
    super(INITIALIZE_GAME_SCENE)
  }

  preload () {
    preloadHandler(this)
  }

  create () {
    createHandler(this)
  }

  update () {
    updateHandler(this)
  }
}

export default InitializeGame
