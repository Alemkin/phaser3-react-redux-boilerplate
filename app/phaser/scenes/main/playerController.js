import Assets from '../assets'

function updateMovement (game) {
  const speed = 175
  const gameCursors = game.cursors
  const playerAnims = game.player.anims

  const modifier = gameCursors.shift.isDown ? 1.5 : 1
  playerAnims.timeScale = 1 * modifier

  game.player.setVelocity(0)
  if (gameCursors.left.isDown) {
    game.player.setVelocityX(-speed * modifier)
  } else if (gameCursors.right.isDown) {
    game.player.setVelocityX(speed * modifier)
  }
  if (gameCursors.up.isDown) {
    game.player.setVelocityY(-speed * modifier)
  } else if (gameCursors.down.isDown) {
    game.player.setVelocityY(speed * modifier)
  }

  game.player.body.velocity.normalize().scale(speed * modifier)

  if (gameCursors.left.isDown) {
    playerAnims.play(PLAYER_ANIMATIONS.WALK_LEFT, true)
  } else if (gameCursors.right.isDown) {
    playerAnims.play(PLAYER_ANIMATIONS.WALK_RIGHT, true)
  } else if (gameCursors.up.isDown) {
    playerAnims.play(PLAYER_ANIMATIONS.WALK_UP, true)
  } else if (gameCursors.down.isDown) {
    playerAnims.play(PLAYER_ANIMATIONS.WALK_DOWN, true)
  } else {
    playerAnims.stop()
  }
}

function setPlayerAnimations (game) {
  const anims = game.anims
  anims.create({
    key: PLAYER_ANIMATIONS.IDLE,
    frameRate: 7,
    frames: anims.generateFrameNumbers(Assets.GENTLEMAN_SPRITESHEET, { start: 131, end: 133 }),
    repeat: -1
  })
  anims.create({
    key: PLAYER_ANIMATIONS.WALK_UP,
    frameRate: 7,
    frames: anims.generateFrameNumbers(Assets.GENTLEMAN_SPRITESHEET, { start: 105, end: 112 }),
    repeat: -1
  })
  anims.create({
    key: PLAYER_ANIMATIONS.WALK_LEFT,
    frameRate: 7,
    frames: anims.generateFrameNumbers(Assets.GENTLEMAN_SPRITESHEET, { start: 118, end: 125 }),
    repeat: -1
  })
  anims.create({
    key: PLAYER_ANIMATIONS.WALK_DOWN,
    frameRate: 7,
    frames: anims.generateFrameNumbers(Assets.GENTLEMAN_SPRITESHEET, { start: 131, end: 138 }),
    repeat: -1
  })
  anims.create({
    key: PLAYER_ANIMATIONS.WALK_RIGHT,
    frameRate: 7,
    frames: anims.generateFrameNumbers(Assets.GENTLEMAN_SPRITESHEET, { start: 144, end: 151 }),
    repeat: -1
  })
}

const PLAYER_ANIMATIONS = {
  WALK_UP: 'walkUp',
  WALK_DOWN: 'walkDown',
  WALK_LEFT: 'walkLeft',
  WALK_RIGHT: 'walkRight',
  IDLE: 'idle'
}

export default { updateMovement, setPlayerAnimations, PLAYER_ANIMATIONS }
