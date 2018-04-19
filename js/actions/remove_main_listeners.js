import { main_game } from '../components/main_game';

export default function removeMainListeners(ctx) {
	ctx.removeEventListener('click', main_game);
}
