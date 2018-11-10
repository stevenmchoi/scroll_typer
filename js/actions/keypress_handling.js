import randCommonWord from '../components/word_field/rand_common_word';
// import renderWord from "../components/word_field/render_word";
import sleep from './sleep';
import wordScroller from '../components/timers/word_scroller';
import calcScore from '../components/score/calc_score';

export default function handleKeypress(event) {
	ctx.clearRect(textXPos, 0, 1200, 425.5);

	window.typedKeys.push(event.key);

	// TODO: option: handle backspaces

	// Calculate score
	calcScore();

	if (window.typedKeys.length === window.randWord.length) {
		sleep(200).then(() => {
			window.typedKeys = [];
			window.randWord = randCommonWord();

			clearInterval(wordScrollerInterval);

			wordScroller();
		});
	}
}
