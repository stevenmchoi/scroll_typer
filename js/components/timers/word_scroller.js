import renderWord from "../word_field/render_word";

export default function wordScroller() {
  let currentYPos = 0.5;
  window.wordScrollerInterval = setInterval(() => {
    renderWord(currentYPos);

    if (currentYPos === 400.5) {
      clearInterval(wordScrollerInterval);

      window.typedKeys = [];
      window.randWord = randCommonWord();
    }

    currentYPos += 1;
  }, 10);
}
