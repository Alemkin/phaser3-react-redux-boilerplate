import Phaser from 'phaser'
import logoImg from '../../../assets/logo.png'
import store from '../../store'
import { increment } from '../../reducers/counterSlice'

class InitializeGame extends Phaser.Scene {
  constructor () {
    super('InitializeGame')
  }

  preload () {
    this.load.image('logo', logoImg)
  }

  create () {
    const logo = this.add.image(400, 150, 'logo')
    logo.setInteractive()
    logo.on('pointerup', function (pointer) {
      store.dispatch(increment())
    })

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })
  }
}

export default InitializeGame
