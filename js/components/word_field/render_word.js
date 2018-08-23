import renderWordBox from "./render_word_box";
import renderScore from "../score/render_score";
export default function renderWord(currentPos = 400.5) {
	ctx.clearRect(textXPos, 0, 1200, 425.5);

	renderWordBox();

	let charLocation = textXPos;
	const colorScore = ["black", "red", "green"];
	let scoreIdx;

	for (let charIdx = 0; charIdx < window.randWord.length; charIdx++) {
		let char = window.randWord[charIdx];

		if (window.typedKeys[charIdx] === char) {
			scoreIdx = 2;
		} else if (window.typedKeys[charIdx] === undefined) {
			scoreIdx = 0;
		} else {
			scoreIdx = 1;
		}

		ctx.font = "100px Roboto Mono";
		ctx.fillStyle = colorScore[scoreIdx];
		ctx.fillText(char, charLocation, currentPos);

		charLocation += ctx.measureText(char).width;
	}

	// Reset fillStyle to black
	ctx.fillStyle = "black";

	// Re-render score on screen
	renderScore();
}
