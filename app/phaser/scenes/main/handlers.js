import Phaser from 'phaser'
import store from '../../../store'
import { increment } from '../../../reducers/counterSlice'
import playerController from './playerController'
import Assets from '../assets'

function setupDebug (game, worldLayer) {
  game.input.keyboard.once('keydown-P', event => {
    game.physics.world.createDebugGraphic()

    const graphics = game.add
      .graphics()
      .setAlpha(0.75)
      .setDepth(20)
    worldLayer.renderDebug(graphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    })
  })
}

function create (game) {
  // game.add.image(0, 0, Assets.BACKGROUND2).setOrigin(0)
  playerController.setPlayerAnimations(game)

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

  game.player = game.physics.add.sprite(spawnPoint.x, spawnPoint.y, Assets.GENTLEMAN_SPRITESHEET)
  game.player.setSize(34, 32)
  game.player.setOffset(16, 34)
  game.physics.add.collider(game.player, worldLayer)
  game.player.setCollideWorldBounds(true)
  game.player.setInteractive()
  game.player.on('pointerup', function (pointer) {
    store.dispatch(increment())
  })

  game.cameras.main.startFollow(game.player, true, 0.05, 0.05)

  setupDebug(game, worldLayer)
}

function update (game) {
  playerController.updateMovement(game)
}

export default { create, update }
