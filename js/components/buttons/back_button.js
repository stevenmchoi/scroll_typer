import mainPage from "../pages/main_page/main_page";
import resetScreen from "../../actions/remove_all_listeners";

export default function backButton() {
	resetScreen();

	song1.pause();
	song1.currentTime = 0;

	mainPage();
}
