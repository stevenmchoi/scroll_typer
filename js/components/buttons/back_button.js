import mainPage from "../pages/main_page/main_page";
import resetScreen from "../../actions/reset_screen";

export default function backButton() {
	resetScreen();
	document.removeEventListener('keyup',
		window.listeners.backButtonKeyupListener);

	song1.pause();
	song1.currentTime = 0;

	mainPage();
}
