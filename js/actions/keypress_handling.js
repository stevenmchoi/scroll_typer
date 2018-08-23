import randCommonWord from "../components/word_field/rand_common_word";
import renderWord from "../components/word_field/render_word";
import sleep from "./sleep";

export default function handleKeypress(event) {
  ctx.clearRect(textXPos, 0, 1200, 425 + 0.5);

  window.typedKeys.push(event.key);

  // TODO: option: handle backspaces

  renderWord();

  if (window.typedKeys.length === randWord.length) {
    sleep(200).then(() => {
      window.typedKeys = [];
      randWord = randCommonWord();

      renderWord();
    });
  }
}
