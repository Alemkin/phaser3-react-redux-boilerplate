import store from '../../../store'
import { increment } from '../../../reducers/counterSlice'
import controllers from './controllers'
import Assets from '../assets'

function create (game) {
  // game.add.image(0, 0, Assets.BACKGROUND2).setOrigin(0)

  const map = game.make.tilemap({ key: Assets.TUXEMON_JSON })

  const tileset = map.addTilesetImage('tuxmon-sample-32px-extruded', Assets.TUXEMON)

  const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0)
  const worldLayer = map.createStaticLayer('World', tileset, 0, 0)
  const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0)

  worldLayer.setCollisionByProperty({ collides: true })
  aboveLayer.setDepth(10)

  const spawnPoint = map.findObject('Objects', obj => obj.name === 'Spawn Point')

  game.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
  game.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

  game.cursors = game.input.keyboard.createCursorKeys()

  game.player = game.physics.add.image(spawnPoint.x, spawnPoint.y, Assets.PLAYER)
  game.physics.add.collider(game.player, worldLayer)
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

export default { create, update }
