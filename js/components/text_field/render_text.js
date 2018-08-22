import renderTextBox from "./render_text_box";
import renderScore from "../score/render_score";

export default function renderText() {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	renderTextBox();

	let charLocation = textStartLocation;
	const colorScore = ['black', 'red', 'green'];
	let scoreIdx;

	for (let charIdx = 0; charIdx < randWord.length; charIdx++) {
		let char = randWord[charIdx];

		if (window.typedKeys[charIdx] === char) {
			scoreIdx = 2;
		} else if (window.typedKeys[charIdx] === undefined) {
			scoreIdx = 0;
		} else {
			scoreIdx = 1;
		}

		ctx.font = '100px Roboto Mono';
		ctx.fillStyle = colorScore[scoreIdx];
		ctx.fillText(char, charLocation, 400);

		charLocation += ctx.measureText(char).width;
	}
	// Reset fillStyle to black
	ctx.fillStyle = "black";

	// Re-render score on screen
	renderScore();
}
