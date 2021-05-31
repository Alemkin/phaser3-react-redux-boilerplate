import store from '../../../store'
import { increment } from '../../../reducers/counterSlice'
import Assets from './assets'

export default function (game) {
  game.cameras.main.setBounds(0, 0, 1088, 960)
  game.physics.world.setBounds(0, 0, 1088, 960)

  game.add.image(0, 0, Assets.BACKGROUND).setOrigin(0)

  game.cursors = game.input.keyboard.createCursorKeys()

  game.player = game.physics.add.image(400, 300, Assets.PLAYER)
  game.player.setCollideWorldBounds(true)
  game.player.setInteractive()
  game.player.on('pointerup', function (pointer) {
    store.dispatch(increment())
  })

  game.cameras.main.startFollow(game.player, true, 0.05, 0.05)
}