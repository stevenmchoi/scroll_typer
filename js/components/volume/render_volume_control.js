import renderButton from '../buttons/render_button';
import { incrVol, decrVol } from './volume_buttons';
// import playPauseButton from "./play_pause_button";

export default function renderVolumeControl() {
	if (!window.volIdx && window.volIdx !== 0) {
		window.volIdx = 5;
		window.currentSong.volume = 0.5;
	}

	let volume = window.currentSong.volume * 100;

	ctx.font = '30px Roboto Mono';
	ctx.textAlign = 'right';
	ctx.fillText('Volume:', 150.5, 340.5);
	ctx.fillText(volume, 120.5, 380.5);
	ctx.textAlign = 'start';

	// "+" and "-" buttons
	renderButton([90.5, 240.5, 50, 50], ['+', 100.5, 280.5], incrVol);
	renderButton([90.5, 420.5, 50, 50], ['-', 100.5, 460.5], decrVol);
	// TODO: Also add "up" and "down" keys for changing volume
}
