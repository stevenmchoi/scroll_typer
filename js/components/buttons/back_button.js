import resetScreen from "../../actions/reset_screen";

export default function backButton(prevPage) {
	resetScreen();
	document.removeEventListener('keyup',
		window.listeners.backButtonKeyupListener);

	song1.pause();
	song1.currentTime = 0;

	prevPage();
}
