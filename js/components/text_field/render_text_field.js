import {
	dict
} from '../../dicts/dict';
import randCommonWord from './rand_common_word';
import handleKeypress from '../../actions/keypress_handling';
import renderText from './render_text';

function renderRandWord() {
	randWord = randCommonWord();

	renderText();
}

export default function renderTextField() {
	document.addEventListener('keypress', handleKeypress);

	window.typedKeys = [];
	window.randWord = '';
	window.textStartLocation = 360 + 0.5;

	// (null on initial step; need )
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderRandWord();
}
