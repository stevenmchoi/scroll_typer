import { sampleSong } from "../../actions/song_handling";
import root from "../root";

export default event => {
	const x_coord = event.offsetX;
	const y_coord = event.offsetY;
	const song1 = document.getElementById("song1");

	if (x_coord > 0 && x_coord < 200 && y_coord > 0 && y_coord < 200) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		song1.pause();
		song1.currentTime = 0;

		root();
	}
};
