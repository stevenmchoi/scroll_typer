import { mainGame } from '../components/main_game';

export default function removeMainListeners(ctx) {
	ctx.removeEventListener('click', mainGame);
}
