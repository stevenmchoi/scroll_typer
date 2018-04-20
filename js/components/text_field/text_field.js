import { dict } from '../../dicts/dict';
import renderTextBox from './render_text_box';
import randCommonWord from './rand_common_word';
import handleKeypress from '../../actions/keypress_handling';

function renderRandWord() {
	let randWord = randCommonWord();

	renderText(randWord);

	document.addEventListener('keypress', handleKeypress);
}

export default () => {
	window.typedKeys = [];
	window.textStartLocation = 360 + 0.5;

	// (null on initial step; need randWord)
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderTextBox();
	renderRandWord();
};
