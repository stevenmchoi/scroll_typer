import randCommonWord from '../components/text_field/rand_common_word';
import renderText from '../components/text_field/render_text';
import renderTextBox from '../components/text_field/render_text_box';

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

// sleep, typedKeys
function handleTyping(event) {
	typedKeys.push(event.key);

	if (typedKeys.length === randWord.length) {
		sleep(200);

		typedKeys = [];
		randWord = randCommonWord();
	}

	return randWord;
}

// handleTyping
export default function handleKeypress(event) {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	renderTextBox();

	randWord = handleTyping(event);

	renderText();
}
