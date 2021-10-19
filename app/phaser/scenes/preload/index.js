import Phaser from 'phaser'
import { PRELOAD, MAIN } from '../sceneNames'
import Assets from '../assets'
// import dockImg from '../../../../assets/dock.png'
import playerImg from '../../../../assets/fmship.png'
// import victorianImg from '../../../../assets/victorian-preview.png'
import tuxemonImg from '../../../../assets/tuxemon/tuxmon-sample-32px-extruded.png'
import tuxemonJson from '../../../../assets/tuxemon/tuxemon-town.json'
import gentlemanImg from '../../../../assets/gentleman.png'

class PreloadScene extends Phaser.Scene {
  constructor () {
    super(PRELOAD)
  }

  preload () {
    // this.load.image(Assets.BACKGROUND, dockImg)
    // this.load.image(Assets.BACKGROUND2, victorianImg)
    this.load.image(Assets.PLAYER, playerImg)

    this.load.image(Assets.TUXEMON, tuxemonImg)
    this.load.tilemapTiledJSON(Assets.TUXEMON_JSON, tuxemonJson)
    this.load.spritesheet(Assets.GENTLEMAN_SPRITESHEET, gentlemanImg, { frameWidth: 64, frameHeight: 64 })
    for (let i = 0; i < 500; i++) {
      this.load.image(Assets.PLAYER + i, playerImg)
    }

    const progressBar = this.add.graphics()
    const progressBox = this.add.graphics()
    progressBox.fillStyle(0x222222, 0.8)
    progressBox.fillRect(40, (this.game.renderer.height / 2) - 10, this.game.renderer.width - 80, 50)
    const percentText = this.make.text({
      x: this.game.renderer.width / 2,
      y: (this.game.renderer.height / 2) + 15,
      text: '0%',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })
    percentText.setOrigin(0.5, 0.5)
    this.load.on('progress', percent => {
      progressBar.clear()
      progressBar.fillStyle(0xffffff, 1)
      progressBar.fillRect(50, this.game.renderer.height / 2, (this.game.renderer.width - 100) * percent, 30)
      percentText.setText(parseInt(percent * 100) + '%')
    })

    const loadingText = this.make.text({
      x: this.game.renderer.width / 2,
      y: (this.game.renderer.height / 2) - 35,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    })
    loadingText.setOrigin(0.5, 0.5)

    this.load.on('complete', function () {
      progressBar.destroy()
      progressBox.destroy()
      loadingText.destroy()
    })
  }

  create () {
    this.scene.start(MAIN)
  }
}

export default PreloadScene
