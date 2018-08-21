import randCommonWord from "../components/text_field/rand_common_word";
import renderText from "../components/text_field/render_text";
import sleep from "./sleep";

function handleTyping(event) {
	typedKeys.push(event.key);

	if (typedKeys.length === randWord.length) {
		sleep(100);

		typedKeys = [];
		randWord = randCommonWord();
	}

	return randWord;
}

export default function handleKeypress(event) {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	typedKeys.push(event.key);

	//   randWord = handleTyping(event);

	renderText();
}
