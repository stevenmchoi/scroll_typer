import startSong from '../components/pages/main_page/start_song';
import backButton from '../components/buttons/back_button';
import handleKeypress from './keypress_handling';
import renderScore from '../components/score/render_score';
import {
	removeButtonListeners
} from './in_button_listener';

export default function resetScreen() {
	// TODO: Easier removal of listeners?
	// canvas.parentNode.replaceChild(canvasClone, canvas);
	// window.ctx = canvas.getContext("2d");
	// canvasClone.parentNode.replaceChild(window.canvas.cloneNode(true), canvasClone);

	// var el = document.getElementById('game-layer'),
	// 	elClone = el.cloneNode(true);

	// el.parentNode.replaceChild(elClone, el);

	// Remove all button listeners
	removeButtonListeners(startSong);
	removeButtonListeners(backButton);

	document.removeEventListener('keypress', handleKeypress);

	// Clear timers
	clearInterval(window.songTimerInterval);

	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Render score on each page
	renderScore();
}
