import dockImg from '../../../../assets/dock.png'
import playerImg from '../../../../assets/fmship.png'
import Assets from './assets'

export default function (game) {
  game.load.image(Assets.BACKGROUND, dockImg)
  game.load.image(Assets.PLAYER, playerImg)
}
