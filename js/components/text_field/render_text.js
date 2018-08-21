import renderTextBox from "./render_text_box";
import renderScore from "../score/render_score";

export default function renderText() {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	renderTextBox();

	let charLocation = textStartLocation;
	const colorScore = ['black', 'red', 'green'];
	let score;

	for (let charIdx = 0; charIdx < randWord.length; charIdx++) {
		let char = randWord[charIdx];

		if (typedKeys[charIdx] === char) {
			score = 2;
		} else if (typedKeys[charIdx] === undefined) {
			score = 0;
		} else {
			score = 1;
		}

		ctx.font = '100px Roboto Mono';
		ctx.fillStyle = colorScore[score];
		ctx.fillText(char, charLocation, 400);

		charLocation += ctx.measureText(char).width;

		userScore += score;
	}

	// Re-render score on screen
	renderScore();
}
