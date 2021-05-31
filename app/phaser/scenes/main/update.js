export default function (game) {
  game.player.setVelocity(0)
  if (game.cursors.left.isDown) {
    game.player.setVelocityX(-500)
    game.player.setAngle(-90)
    game.player.x -= 2.5
  } else if (game.cursors.right.isDown) {
    game.player.setVelocityX(500)
    game.player.setAngle(90)
    game.player.x += 2.5
  }
  if (game.cursors.up.isDown) {
    game.player.setVelocityY(-500)
    game.player.setAngle(0)
    game.player.y -= 2.5
  } else if (game.cursors.down.isDown) {
    game.player.setVelocityY(500)
    game.player.setAngle(-180)
    game.player.y += 2.5
  }
}
