export default function renderText() {
	let charLocation = textStartLocation;

	const colorScore = ['black', 'red', 'green'];

	for (let charIdx = 0; charIdx < randWord.length; charIdx++) {
		let char = randWord[charIdx];
		let score;

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
	}
}
