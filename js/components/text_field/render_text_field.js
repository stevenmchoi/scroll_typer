import {
	dict
} from '../../dicts/dict';
import renderTextBox from './render_text_box';
import randCommonWord from './rand_common_word';
import handleKeypress from '../../actions/keypress_handling';
import renderText from './render_text';

function renderRandWord() {
	randWord = randCommonWord();

	renderText();

	document.addEventListener('keypress', handleKeypress);
}

export default function renderTextField() {
	window.typedKeys = [];
	window.randWord = '';
	window.textStartLocation = 360 + 0.5;

	// (null on initial step; need )
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderTextBox();
	renderRandWord();
}
