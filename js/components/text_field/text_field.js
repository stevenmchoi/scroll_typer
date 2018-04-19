import { dict } from '../../dicts/dict';
import { commonMoreThan_2 } from '../../dicts/filtered';
import renderTextBox from './render_text_box';

const startLocation = 480 + 0.5;

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

let typedKeys = [];

// commonMoreThan_2
function randCommonWord() {
	return commonMoreThan_2[
		Math.floor(Math.random() * commonMoreThan_2.length)
	];
}

// fill text
function renderText(ctx, randWord) {
	let charLocation = startLocation;

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

		(ctx.font = '100px Roboto Mono'), '100px Courier', 'monospace';
		ctx.fillStyle = colorScore[score];
		ctx.fillText(char, charLocation, 400);

		charLocation += ctx.measureText(char).width;
	}
}

// sleep, typedKeys, randCommonWord
function handleTyping(ctx, event, randWord) {
	typedKeys.push(event.key);

	if (typedKeys.length === randWord.length) {
		sleep(200);

		typedKeys = [];
		randWord = randCommonWord();
	}

	return randWord;
}

// randCommonWord, handleTyping
function renderRandWord(ctx) {
	let randWord = randCommonWord();

	renderText(ctx, randWord);

	document.addEventListener('keypress', (event) => {
		ctx.clearRect(startLocation, 0, 1200, 425 + 0.5);

		renderTextBox(ctx, startLocation);

		randWord = handleTyping(ctx, event, randWord);

		renderText(ctx, randWord);
	});
}

export default (ctx) => {
	// (null on initial step; need randWord)
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderTextBox(ctx, startLocation);
	renderRandWord(ctx);
};
