import renderWordBox from './render_word_box';
import renderScore from '../score/render_score';
export default function renderWord(currentPos = 400.5) {
	ctx.clearRect(textXPos, 0, 1200, 425.5);

	renderWordBox();

	let charLocation = textXPos;
	const colorScore = ['black', 'red', 'green'];
	let scoreIdx;

	for (let charIdx = 0; charIdx < window.randWord.length; charIdx++) {
		let randChar = window.randWord[charIdx];
		let typedChar = window.typedKeys[charIdx];

		if (typedChar === undefined) {
			scoreIdx = 0;
		} else if (typedChar.toLowerCase() === randChar.toLowerCase()) {
			scoreIdx = 2;
		} else {
			scoreIdx = 1;
		}

		ctx.font = '100px Roboto Mono';
		ctx.fillStyle = colorScore[scoreIdx];
		ctx.fillText(randChar, charLocation, currentPos);

		charLocation += ctx.measureText(randChar).width;
	}

	// Reset fillStyle to black
	ctx.fillStyle = 'black';

	// Re-render score on screen
	renderScore();
}
