import Phaser from 'phaser'
import main from '../phaser/scenes/main'
import preload from '../phaser/scenes/preload'

export default {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 1080,
  height: 720,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      }
    }
  },
  scene: [preload, main]
}
