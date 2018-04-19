import mainGame from '../components/main_game/main_game';

export default function removeMainListeners(ctx) {
	canvas.removeEventListener('click', mainGame);
	canvas.removeEventListener('click', backButton);
}
