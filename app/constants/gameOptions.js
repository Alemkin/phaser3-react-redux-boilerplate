import Phaser from 'phaser'
import main from '../phaser/scenes/main'

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
  scene: main
}
