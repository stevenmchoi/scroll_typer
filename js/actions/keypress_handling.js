import randCommonWord from "../components/text_field/rand_common_word"
import renderText from "../components/text_field/render_text"
import sleep from './sleep'

export default function handleKeypress(event) {
	ctx.clearRect(textStartLocation, 0, 1200, 425 + 0.5);

	typedKeys.push(event.key);

	renderText();

	if (typedKeys.length === randWord.length) {
		sleep(200).then(() => {
			typedKeys = [];
			randWord = randCommonWord();

			renderText();
		});
	}
}
