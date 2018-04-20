import mainGame from '../components/main_game/main_game';

export default function removeAllListeners() {
	canvas.removeEventListener('click', mainGame);
	canvas.removeEventListener('click', backButton);
	canvas.removeEventListener('keypress', handleKeypress);
}
