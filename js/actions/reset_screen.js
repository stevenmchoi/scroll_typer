import songPlayPage from '../components/pages/song_play_page';
import backButton from '../components/buttons/back_button';
import handleKeypress from './keypress_handling';
import renderScore from '../components/score/render_score';
import { removeButtonListeners } from './in_button_listener';
import { incrVol, decrVol } from '../components/volume/volume_buttons';
import renderVolumeControl from '../components/volume/render_volume_control';
import loadSongs from './load_songs';
import introPage from '../components/pages/intro';
import songsPage from '../components/pages/songs_page';
import gameOverPage from '../components/pages/game_over_page';
import playPauseButton from '../components/volume/play_pause_button';

export default function resetScreen() {
	// Remove all button listeners
	removeButtonListeners(introPage);
	removeButtonListeners(playPauseButton);
	removeButtonListeners(backButton);
	removeButtonListeners(songsPage);
	removeButtonListeners(songPlayPage);
	removeButtonListeners(gameOverPage);
	// TODO: "incrVol" and "decrVol" listeners aren't disappearing
	//       Causes larger increments of volume when clicking back and forth
	removeButtonListeners(incrVol);
	removeButtonListeners(decrVol);

	document.removeEventListener('keypress', handleKeypress);
	document.removeEventListener('keyup', window.listeners.backButtonKeyupListener);
	document.removeEventListener('keyup', window.listeners.introBackButtonKeyupListener);

	// Clear timers
	clearInterval(window.songTimerInterval);
	clearInterval(window.wordScrollerInterval);

	// Clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Load songs and render volume control
	loadSongs()
		.then(renderVolumeControl)
		.catch((err) => console.log(err));

	// Render score on each page
	renderScore();

	// Reset cursor style
	document.body.style.cursor = 'default';

	// TODO: Easier removal of listeners?
	// canvas.parentNode.replaceChild(canvasClone, canvas);
	// window.ctx = canvas.getContext("2d");
	// canvasClone.parentNode.replaceChild(window.canvas.cloneNode(true), canvasClone);

	// var el = document.getElementById('game-layer'),
	// 	elClone = el.cloneNode(true);

	// el.parentNode.replaceChild(elClone, el);
}
