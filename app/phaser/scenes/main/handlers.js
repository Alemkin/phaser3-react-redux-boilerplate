import store from '../../../store'
import { increment } from '../../../reducers/counterSlice'
import dockImg from '../../../../assets/dock.png'
import playerImg from '../../../../assets/fmship.png'
import victorianImg from '../../../../assets/victorian-preview.png'
import controllers from './controllers'
import Assets from './assets'

function preload (game) {
  game.load.image(Assets.BACKGROUND, dockImg)
  game.load.image(Assets.BACKGROUND2, victorianImg)
  game.load.image(Assets.PLAYER, playerImg)
}

function create (game) {
  game.cameras.main.setBounds(0, 0, 4096, 4096)
  game.physics.world.setBounds(0, 0, 4096, 4096)

  game.add.image(0, 0, Assets.BACKGROUND2).setOrigin(0)

  game.cursors = game.input.keyboard.createCursorKeys()

  game.player = game.physics.add.image(1500, 1500, Assets.PLAYER)
  game.player.setCollideWorldBounds(true)
  game.player.setInteractive()
  game.player.on('pointerup', function (pointer) {
    store.dispatch(increment())
  })

  game.cameras.main.startFollow(game.player, true, 0.05, 0.05)
}

function update (game) {
  controllers.player(game)
}

export default { preload, create, update }
