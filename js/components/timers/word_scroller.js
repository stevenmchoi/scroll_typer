import renderWord from '../word_field/render_word';
import randCommonWord from '../word_field/rand_common_word';

export default function wordScroller() {
	let currentYPos = 0.5;
	window.wordScrollerInterval = setInterval(() => {
		renderWord(currentYPos);

		if (currentYPos === 400.5) {
			clearInterval(wordScrollerInterval);

			window.typedKeys = [];
			window.randWord = randCommonWord();

			wordScroller();
		}

		currentYPos += 1;
	}, 10);
}
