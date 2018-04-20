import renderTextField from '../text_field/text_field';
import { keyboard } from '../keyboard';
import backButton from './back_button';
import removeAllListeners from '../../actions/remove_all_listeners';
import handleBeats from '../../actions/beat_handling';

export default function mainGame(event) {
	removeAllListeners();

	const x_coord = event.offsetX;
	const y_coord = event.offsetY;

	if (x_coord > 400 && x_coord < 800 && y_coord > 300 && y_coord < 425) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = '50px Roboto Mono';
		ctx.fillText('Back', 25, 70);
		ctx.strokeStyle = 'black';
		ctx.strokeRect(-0.5, -0.5, 170, 100);
		canvas.addEventListener('click', backButton);

		keyboard();

		renderTextField();

		handleBeats();
	}
}
