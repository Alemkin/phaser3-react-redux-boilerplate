import Phaser from 'phaser'
import { PRELOAD, MAIN } from '../sceneNames'
import Assets from '../assets'
import dockImg from '../../../../assets/dock.png'
import playerImg from '../../../../assets/fmship.png'
import victorianImg from '../../../../assets/victorian-preview.png'

class PreloadScene extends Phaser.Scene {
  constructor () {
    super(PRELOAD)
  }

  preload () {
    this.load.image(Assets.BACKGROUND, dockImg)
    this.load.image(Assets.BACKGROUND2, victorianImg)
    this.load.image(Assets.PLAYER, playerImg)
  }

  create () {
    this.scene.start(MAIN)
  }
}

export default PreloadScene
