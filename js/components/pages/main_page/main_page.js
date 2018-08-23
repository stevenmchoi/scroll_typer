import resetScreen from "../../../actions/reset_screen";
import renderButton from "../../buttons/render_button";
import startSong from "./start_song";

export default function mainPage() {
	resetScreen();

	// Render start button
	renderButton([400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5], startSong);

	document.body.style.cursor = "default";
}
