import startSong from '../components/pages/song_page/start_song';
import backButton from '../components/buttons/back_button';
import handleKeypress from './keypress_handling';
import renderScore from '../components/score/render_score';
import {
	removeButtonListeners
} from './in_button_listener';
import {
	incrVol,
	decrVol
} from '../components/volume/volume_buttons';
import renderVolumeControl from '../components/volume/render_volume_control';
import loadSongs from './load_songs';

export default function resetScreen() {
	// Remove all button listeners
	removeButtonListeners(startSong);
	removeButtonListeners(backButton);
	// TODO: "incrVol" and "decrVol" listeners aren't disappearing
	//       Causes larger increments of volume when clicking back and forth
	removeButtonListeners(incrVol);
	removeButtonListeners(decrVol);

	document.removeEventListener('keypress', handleKeypress);
	document.removeEventListener('keyup', window.listeners.backButtonKeyupListener)

	// Clear timers
	clearInterval(window.songTimerInterval);
	clearInterval(window.wordTimerInterval);

	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Load songs and render volume control
	loadSongs().then(renderVolumeControl).catch(err => console.log(err));

	// Render score on each page
	renderScore();

	// TODO: Easier removal of listeners?
	// canvas.parentNode.replaceChild(canvasClone, canvas);
	// window.ctx = canvas.getContext("2d");
	// canvasClone.parentNode.replaceChild(window.canvas.cloneNode(true), canvasClone);

	// var el = document.getElementById('game-layer'),
	// 	elClone = el.cloneNode(true);

	// el.parentNode.replaceChild(elClone, el);

}
