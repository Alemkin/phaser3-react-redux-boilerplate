import Phaser from 'phaser'
import { PRELOAD, MAIN } from '../sceneNames'
import Assets from '../assets'
import dockImg from '../../../../assets/dock.png'
import playerImg from '../../../../assets/fmship.png'
import victorianImg from '../../../../assets/victorian-preview.png'
import tuxemonImg from '../../../../assets/tuxemon/tuxmon-sample-32px-extruded.png'
import tuxemonJson from '../../../../assets/tuxemon/tuxemon-town.json'

class PreloadScene extends Phaser.Scene {
  constructor () {
    super(PRELOAD)
  }

  preload () {
    this.load.image(Assets.BACKGROUND, dockImg)
    this.load.image(Assets.BACKGROUND2, victorianImg)
    this.load.image(Assets.PLAYER, playerImg)

    this.load.image(Assets.TUXEMON, tuxemonImg)
    this.load.tilemapTiledJSON(Assets.TUXEMON_JSON, tuxemonJson)
  }

  create () {
    this.scene.start(MAIN)
  }
}

export default PreloadScene
