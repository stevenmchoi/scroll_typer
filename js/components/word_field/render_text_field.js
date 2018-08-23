import randCommonWord from "./rand_common_word";
import handleKeypress from "../../actions/keypress_handling";
import renderWord from "./render_word";

function renderRandWord() {
	randWord = randCommonWord();

	renderWord();
}

export default function renderWordField() {
	document.addEventListener("keypress", handleKeypress);

	window.typedKeys = [];
	window.randWord = "";
	window.textXPos = 360 + 0.5;

	// (null on initial step; need )
	// listen to key that was pressed
	// detect key pressed
	// check if key is right or wrong
	// mark right or wrong

	// TODO: render last character
	renderRandWord();
}
