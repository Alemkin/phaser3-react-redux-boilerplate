import Phaser from 'phaser'
import main from '../phaser/scenes'

export default {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 800,
  height: 600,
  scene: main
}
