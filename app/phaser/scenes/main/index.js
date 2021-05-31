import Phaser from 'phaser'
import { MAIN } from '../sceneNames'
import handlers from './handlers'

class MainScene extends Phaser.Scene {
  constructor () {
    super(MAIN)
  }

  preload () {

  }

  create () {
    handlers.create(this)
  }

  update () {
    handlers.update(this)
  }
}

export default MainScene
