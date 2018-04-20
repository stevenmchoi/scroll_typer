import mainGame from '../components/main_game/main_game';
import backButton from '../components/main_game/back_button';
import handleKeypress from './keypress_handling';

export default function removeAllListeners() {
	canvas.removeEventListener('click', mainGame);
	canvas.removeEventListener('click', backButton);
	canvas.removeEventListener('keypress', handleKeypress);
}
