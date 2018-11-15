import resetScreen from '../../actions/reset_screen';
import renderButton from '../buttons/render_button';
import songPlayPage from './song_play_page';
import introPage from './intro';
import { inButton } from '../../actions/in_button_listener';
import { setSongNum } from '../../actions/set_song_num';
// import backButton from "../../buttons/back_button";

export default function songsPage() {
	resetScreen();

	// Render start button
	// renderButton([400.5, 300.5, 400, 125], ['Future Retro', 420.5, 380.5], songPlayPage);
	for (let songIdx = 0; songIdx < window.allSongs.length; songIdx++) {
		const song = window.allSongs[songIdx];
		const btnDimens = [400.5, 50.5 + songIdx * 150, 420, 125];

		setSongNum(btnDimens, songIdx);

		canvas.addEventListener('mousemove');

		renderButton(btnDimens, [song.dataset.title, 420.5, 130.5 + songIdx * 150], songPlayPage);
	}

	// TODO: back button to Intro page
	// Render back button and add "left keypress" back
	renderButton([-0.5, -0.5, 170, 100], ['Back', 25, 70], introPage);
	window.listeners.introBackButtonKeyupListener = (event) => {
		if (event.key === 'ArrowLeft') {
			introPage();
		}
	};
	document.addEventListener('keyup', window.listeners.introBackButtonKeyupListener);
}
