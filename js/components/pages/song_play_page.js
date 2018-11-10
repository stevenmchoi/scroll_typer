import setupWordField from '../word_field/setup_word_field';
import backButton from '../buttons/back_button';
import renderButton from '../buttons/render_button';
import resetScreen from '../../actions/reset_screen';
import songTimer from '../timers/song_timer';
import gameOverPage from './game_over_page';
import playPauseButton from '../volume/play_pause_button';
// import { keyboard } from "../keyboard";

export default function songPlayPage() {
	resetScreen();

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ['Back', 25, 70], backButton);
	// Add "left keypress" back
	window.listeners.backButtonKeyupListener = (event) => {
		if (event.key === 'ArrowLeft') {
			backButton();
		}
	};
	document.addEventListener('keyup', window.listeners.backButtonKeyupListener);

	window.currentSong.play();

	// TODO: Play/pause button
	// renderButton([190.5, 320.5, 80, 80], ["", 200.5, 373.5], playPauseButton);
	// currentSong.addEventListener("playing", playPauseButton);

	// console.log(window.currentSong.playing);

	// ctx.fillStyle = "black";
	// ctx.strokeRect(190.5, 320.5, 80, 80);
	// if (window.currentSong.playing) {
	// 	ctx.fillRect(208.5, 335.5, 15, 50);
	// 	ctx.fillRect(238.5, 335.5, 15, 50);
	// } else {
	// 	ctx.strokeStyle = 'black';
	// 	ctx.beginPath();
	// 	ctx.moveTo(208.5, 335.5);
	// 	ctx.lineTo(238.5, 360.5);
	// 	ctx.lineTo(208.5, 385.5);
	// 	ctx.lineTo(208.5, 335.5);
	// 	ctx.stroke();
	// 	ctx.fill();
	// }

	setupWordField();

	// Render timer
	songTimer();

	// Render quit button
	renderButton([-0.5, 500.5, 170, 100], ['Quit', 25, 570], gameOverPage);

	// Check when song is over
	currentSong.addEventListener('ended', gameOverPage);

	// keyboard();
}
