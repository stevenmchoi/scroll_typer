import resetScreen from "../../../actions/reset_screen";
import renderButton from "../../buttons/render_button";
import startSong from "./start_song";
import loadSongs from "../../../actions/load_songs";
import renderVolumeControl from "../../volume/render_volume_control";

export default function mainPage() {
	resetScreen();

	// Render start button
	renderButton([400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5], startSong);

	// Load songs
	loadSongs().then(renderVolumeControl).catch(err => console.log(err));

	document.body.style.cursor = "default";
}
