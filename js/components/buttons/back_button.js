import resetScreen from '../../actions/reset_screen';
import songsPage from '../pages/songs_page';

export default function backButton() {
	resetScreen();

	// Only pause for backButton
	// TODO: Make pause button
	window.currentSong.pause();

	songsPage();
}
