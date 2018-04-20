import { dict } from '../../dicts/dict';
import renderTextBox from './render_text_box';
import randCommonWord from './rand_common_word';

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

// fill text
function renderText(randWord, startLocation) {
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

		ctx.font = '100px Roboto Mono';
		ctx.fillStyle = colorScore[score];
		ctx.fillText(char, charLocation, 400);

		charLocation += ctx.measureText(char).width;
	}
}

// sleep, typedKeys
function handleTyping(event, randWord) {
	typedKeys.push(event.key);

	if (typedKeys.length === randWord.length) {
		sleep(200);

		typedKeys = [];
		randWord = randCommonWord();
	}

	return randWord;
}

// handleTyping
function renderRandWord(startLocation) {
	let randWord = randCommonWord();

	renderText(randWord, startLocation);

	document.addEventListener('keypress', (event) => {
		ctx.clearRect(startLocation, 0, 1200, 425 + 0.5);

		renderTextBox(startLocation);

		randWord = handleTyping(event, randWord);

		renderText(randWord, startLocation);
	});
}

export default () => {
	window.typedKeys = [];
	const startLocation = 360 + 0.5;

	// (null on initial step; need randWord)
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderTextBox(startLocation);
	renderRandWord(startLocation);
};
