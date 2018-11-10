import renderButton from '../buttons/render_button';
import songPlayPage from './song_play_page';
import resetScreen from '../../actions/reset_screen';
import renderText from '../util/render_text';
import backButton from '../buttons/back_button';

export default function gameOverPage() {
	resetScreen();

	// Endgame text
	renderText(100, 'Great job!', 600.5, 150.5, 'center');

	// Render score
	renderText(30, 'Your score was:', 600.5, 250.5, 'center');
	renderText(100, window.userScore, 600.5, 420.5, 'center');

	renderButton([440.5, 600.5, 320, 125], ['Try again', 460.5, 680.5], songPlayPage);

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ['Back', 25, 70], backButton);
	// Add "left keypress" back
	window.listeners.backButtonKeyupListener = (event) => {
		if (event.key === 'ArrowLeft') {
			backButton();
		}
	};
	document.addEventListener('keyup', window.listeners.backButtonKeyupListener);

	// Reset song and score when quitting
	window.currentSong.pause();
	window.currentSong.currentTime = 0;
	window.userScore = 0;
}
